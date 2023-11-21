import { UserModel } from '../../../.history/src/app/model/register.model_20231117183244';
export interface LoginModel{
  message: string;
  token: string;
  user: UserModel;
}
