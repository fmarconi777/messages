import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService = new MessagesService()) {}

    @Get()
    async listMessages<T>(): Promise<T[]> {
        return await this.messagesService.findAll()
    }

    @Post()
    async createMessage(@Body() body: CreateMessageDto) {
        await this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getMessage<T>(@Param('id') id: string): Promise<T[]> {
        return await this.messagesService.findOne(id)
    }
}
