import { Address } from './address';
import { Document } from './document';

export class Farmer {
    id: string;
    document: Document = new Document();
    name: string;
    address: Address = new Address();;

    constructor() {}
}