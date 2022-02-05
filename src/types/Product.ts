import {Catalog} from './Catalog'

export interface Product{
    catalog:Catalog
    company:string,
    barCodes:string[],
    supplierId:Number[],
}
