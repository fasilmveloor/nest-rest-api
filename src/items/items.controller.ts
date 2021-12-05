import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';//importing the Dto created


@Controller('items')//handles item controller
export class ItemsController {
    @Get()//Creating an Get end point with the decorator
    findAll(): string{
        return 'Get All items';
    }

    @Post()//Creating an Post end point with the decorator
    create(@Body() createItemDto:CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description} quantity : ${createItemDto.qty}`;
    }
}
