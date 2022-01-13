export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private creationDate: string,
        private type: POST_TYPES,
        private userId: string
    ) { }
}