import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

    constructor(@InjectRepository(Item) 
                private itemRepository: Repository<Item>) {}
    
    findAll() : Promise<Item[]> {
        return this.itemRepository.find();
    }

    findOne(id : string) : Promise<Item> {
        return this.itemRepository.findOne(id);
    }

    createItem(item : Item): Promise<Item> {
        return this.itemRepository.save(item);
    }

    async update(id : string, data : Partial<Item>) {
        await this.itemRepository.update(id, data);
        return this.itemRepository.findOne(id);
    }

    async deleteItem(id : string)  {
        await this.itemRepository.delete(id);
        return {deleted: true};
    }
}
