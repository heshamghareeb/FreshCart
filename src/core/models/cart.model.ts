export interface CartModel {
  status:         string;
  message:        string;
  numOfCartItems: number;
  data:           ProductsinCartModel;
}

export interface ProductsinCartModel {
  _id:            string;
  cartOwner:      string;
  products:       ProductInCartList[];
  createdAt:      Date;
  updatedAt:      Date;
  __v:            number;
  totalCartPrice: number;
}

export interface ProductInCartList {
  count:   number;
  _id:     string;
  product: string;
  price:   number;
}
