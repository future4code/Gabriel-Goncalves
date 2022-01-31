import { ProductsDatabase } from "../Data/productsDatabase"
import { Product, Tags } from "../Model/Products"
import { IdGenerator } from "../Services/idGenerator"

export class ProductsBuisiness {

    getProductByQuery = async (
        query: string
    ) => {
        
        if (!query) {
            throw new Error("Sem parâmetro de pesquisa")
        }

        const product = await new ProductsDatabase().getProductByQuery(query)

        if(product.length === 0) {
            throw new Error("Não há produtos com esta descrição")
        }

        return product
    }

    createProduct = async (
        name: string,
        tags: string
    ): Promise<void> => {

        if (!name || !tags) {
            throw new Error("Preencha todos os campos")
        }

        const tagsToDB: string = JSON.stringify(tags)

        const idGenerator = new IdGenerator()
        const productId = idGenerator.generate()
        const tagsId = idGenerator.generate()

        const newProduct = new Product(productId, name)

        const newTags = new Tags(tagsId, tagsToDB, productId)

        await new ProductsDatabase().createProduct(newProduct, newTags)
    }
}