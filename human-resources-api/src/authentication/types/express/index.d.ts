import { UserInfo } from 'src/authentication';

export {};

declare global {
  namespace Express {
    export interface Request {
      userInfo?: UserInfo;
    }
  }
}
