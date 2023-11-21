import { Brand } from "./brand.model";

export interface GetCartModel {
  status:         string;
  numOfCartItems: number;
  data:           DataGetCartModel;
}

export interface DataGetCartModel {
  _id:            string;
  cartOwner:      string;
  products:       ListofProduct[];
  createdAt:      Date;
  updatedAt:      Date;
  __v:            number;
  totalCartPrice: number;
}

export interface ListofProduct {
  count:   number;
  _id:     string;
  product: Product;
  price:   number;
}

export interface Product {
  subcategory:    Brand[];
  _id:            string;
  title:          string;
  quantity:       number;
  imageCover:     string;
  category:       Brand;
  brand:          Brand;
  ratingsAverage: number;
  id:             string;
}

