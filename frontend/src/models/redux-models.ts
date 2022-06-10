export interface LoginModel {
  username: string;
  password: string;
}

export interface UserModel {
  username: string | null;
  email: string | null;
  id: number | null;
}

export interface AuthModel {
  refresh: string | null;
  access: string | null;
}
