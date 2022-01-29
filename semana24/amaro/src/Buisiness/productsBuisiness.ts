import { ProductsDatabase } from "../Data/productsDatabase"
import { Product, Tags } from "../Model/Products"
import { IdGenerator } from "../Services/idGenerator"

export class ProductsBuisiness {

    getProductByQuery = async (
        query: string
    ) => {

        const product = await new ProductsDatabase().getProductByQuery(query)

        return product
    }

    createProduct = async (
        name: string,
        tags: string
    ): Promise<void> => {

        const idGenerator = new IdGenerator()
        const productId = idGenerator.generate()
        const tagsId = idGenerator.generate()

        const newProduct = new Product(productId, name)

        const newTags = new Tags(tagsId, tags, productId)

        await new ProductsDatabase().createProduct(newProduct, newTags)
    }
}