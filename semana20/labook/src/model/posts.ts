export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export interface Post {
    userId: string
    id: string
    photo: string
    description: string
    creationDate: Date
    type: POST_TYPES
}

export class Post {
    constructor(
        private userId: string,
        private id: string,
        private photo: string,
        private description: string,
        private creationDate: date,
        private type: POST_TYPES
    ) {}
}