import { Metadata } from "./pagination.model"
import { ProductModel } from "./product.model"

export interface AllProductsModel {
  results: number
  metadata: Metadata
  data: ProductModel[]
}









