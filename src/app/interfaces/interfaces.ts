export interface userResponse {
    ok: boolean;
    users: User[];
}

export interface User {
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    age?: number;
    size?: string;
    sex?: string;
    desc?: string;
    img?: string;
}