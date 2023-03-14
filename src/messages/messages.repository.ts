import { Injectable } from '@nestjs/common'
import { readFile, writeFile } from 'fs/promises'

@Injectable()
export class MessagesRepository {
    async findOne<T>(id: string): Promise<T[]> {
        const contents =  await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)
        return messages[id]
    }

    async findAll<T>(): Promise<T[]> {
        const contents =  await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)
        return messages
    }

    async create(content: string): Promise<void> {
        const contents =  await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)
        const id = Math.floor(Math.random() * 999)
        messages[id] = { id, content}
        await writeFile('messages.json', JSON.stringify(messages))
        return
    }
}