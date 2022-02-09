export class Product {
    constructor(
        private id: string,
        private name: string,
    ) {}
}

export class Tags {
    constructor(
        private id: string,
        private tags: string,
        private product_id: string
    ) {}
}