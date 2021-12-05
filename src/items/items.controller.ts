import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';//importing the Dto created
import { ItemsService } from './items.service';
import { Items } from './interfaces/items.interface';
import { Item } from './entities/item.entity';

@Controller('items')//handles item controller
export class ItemsController {

    constructor(private readonly itemService : ItemsService) {

    }


    @Get()//Creating an Get end point with the decorator
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    /* 
    Handling Url parameters
    @Get(':id')//Creating with url parameters
    //@Param is used to Access url parameters
    findone(@Param() param) : string {
        return `item : ${param.id}`;
    }
    */
    @Get(':id') 
    findone(@Param('id') id) : Items {
        return this.itemService.findOne(id);
    }
    
    //Delete end point
    @Delete(':id')
    delete(@Param('id') id) : string {
        return `Delete : ${id}`;
    }

    //Update end point
    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto, @Param('id') id) : string {
        return `Update : ${id} - Name: ${updateItemDto.name}`;
    }

    @Post()//Creating an Post end point with the decorator
    create(@Body() createItemDto:CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description} quantity : ${createItemDto.qty}`;
    }
}
