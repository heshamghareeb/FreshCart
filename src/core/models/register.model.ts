import { UserModel } from "./user.model";

export interface RegisterModel{
  message: string;
  token: string;
  user: UserModel;
}
