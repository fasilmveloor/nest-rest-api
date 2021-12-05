import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus, Patch } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';

@Controller('items')//handles item controller
export class ItemsController {

    constructor(private readonly itemService : ItemsService) {

    }

    @Post()
    async createItem(@Res() response, @Body()item : Item) {
        const newItem = await this.itemService.createItem(item);
        return response.status(HttpStatus.CREATED).json({
            newItem
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const items = await this.itemService.findAll();
        return response.status(HttpStatus.OK).json({
            items
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const item = await this.itemService.findOne(id);
        return response.status(HttpStatus.OK).json({
            item
        })
    }

    @Patch(':id')
    async updateUser(@Res() response, @Param('id') id, @Body() data: Partial<Item>) {
        const item = await this.itemService.update(id, data);
        return response.status(HttpStatus.FOUND).json({
            item
        })
    }

    @Delete(':id')
    async deleteUser(@Res() response, @Param('id') id) {
        const res = await this.itemService.deleteItem(id);
        return response.status(HttpStatus.FOUND).json({
            res
        })
    }
}
