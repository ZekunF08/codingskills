export interface Catalog {
  SKU: string;
  Description: string;
}

export interface CatalogWithSource extends Catalog {
  source: string;
}
