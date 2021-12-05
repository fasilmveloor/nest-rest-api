import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { Items } from './interfaces/items.interface';

@Injectable()
export class ItemsService {

    constructor(@InjectRepository(Item) 
                private itemRepository: Repository<Item>) {}


    private readonly items : Items[] = [ 
        // Creating an Item array
        {
            id : "343444444",
            name : "Item One",
            qty : 100,
            description : "This is item one"
        },
        {
            id : "343444445",
            name : "Item Two",
            qty : 800,
            description : "This is item Two"
        },
        {
            id : "343444446",
            name : "Item Three",
            qty : 50,
            description : "This is item Three"
        }
    ];

    findAll() : Promise<Item[]> {
        return this.itemRepository.find();
    }

    findOne(id : string) : Items {
        return this.items.find(item => item.id == id);
    }
}
