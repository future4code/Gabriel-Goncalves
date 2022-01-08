export interface authenticationData {
    id: string
}

export interface userCredentials {
    email: string
    password: string
}

export interface user extends authenticationData, userCredentials {
    name: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {}

    getId(): string {
        return this.id
    }
}