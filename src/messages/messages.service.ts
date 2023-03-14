import { MessagesRepository } from "./messages.repository"

export class MessagesService {
    constructor (private readonly messagesRepo: MessagesRepository = new MessagesRepository()) {}

    async findOne<T>(id: string): Promise<T[]> {
        return await this.messagesRepo.findOne(id)
    }

    async findAll<T>(): Promise<T[]> {
        return await this.messagesRepo.findAll()
    }

    async create(content: string): Promise<void> {
        await this.messagesRepo.create(content)
        return
    }
}