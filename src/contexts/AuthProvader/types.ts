export interface IUser{
    email?: string;
    token?: string;
}

export interface IContext extends  IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvader {
    children: JSX.Element;
}