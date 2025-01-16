
export interface IUser {
  id?: number;
  password: string;
  pseudo: string;
  phone: string;
  avatar?: string;
  acceptTerms: boolean;
  accountVerified: boolean;
  createdAt: number;
  updatedAt: number;
}

export class User implements IUser {
  id: number;
  password: string;
  pseudo: string;
  phone: string;
  avatar: string;
  acceptTerms: boolean;
  accountVerified: boolean;
  createdAt: number;
  updatedAt: number;

  constructor(params: IUser) {
    this.id = params.id ? params.id : NaN;
    this.password = params.password;
    this.pseudo = params.pseudo;
    this.phone = params.phone ? params.phone : '';
    this.avatar = params.avatar ? params.avatar : '';
    this.acceptTerms = params.acceptTerms;
    this.accountVerified = params.accountVerified;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
