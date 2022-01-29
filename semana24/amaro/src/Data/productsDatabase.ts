import { Product, Tags } from "../Model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {

    getProductByQuery = async (
        query: string
    ) => {

        const result = await this.connection()
            .select(`${this.tableNames.products}.id`)
            .select(`${this.tableNames.products}.name`)
            .select(`${this.tableNames.tags}.tags`)
            .from(this.tableNames.products)
            .leftJoin(this.tableNames.tags, "products.id", "tags.product_id")
            .where({ "products.id": query })
            .orWhere({ "products.name": query })
            .orWhere({ "tags": query })

        return result
    }

    createProduct = async (
        product: Product,
        tags: Tags
    ): Promise<void> => {

        try {
            await this.connection()
                .insert(product)
                .into(this.tableNames.products)

            await this.connection()
                .insert(tags)
                .into(this.tableNames.tags)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}