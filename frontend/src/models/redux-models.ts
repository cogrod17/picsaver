interface ReduxFields {
  loading?: boolean;
  error?: string | null;
}

export interface UserModel extends ReduxFields {
  data: { username: string | null; email: string | null; id: number | null };
}

export interface AuthModel extends ReduxFields {
  data: { refresh: string | null; access: string | null };
}
