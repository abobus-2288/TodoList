export interface Todo {
    id: number;
    title: string;
    is_completed: boolean;
    user?: User;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface paginatorInfo {
    count: number;
    currentPage: number;
    firstItem: number;
    hasMorePages: boolean;
    lastItem: number;
    lastPage: number;
    perPage: number;
    total: number;
}

export interface TodoResponse {
    data: {
        todos: {
            data: Todo[];
        },
        paginatorInfo: paginatorInfo;
    }
}

export interface RegisterResponse {
    data: {
        register: {
            message: string;
            token: string;
            user: User;
        }
    }
}
export interface LoginResponse {
    data: {
        login: {
            message: string;
            token: string;
            user: User;
        }
    }
}

export interface RegisterInput {
    name: string;
    email: string;
    password: string;
}

export interface LoginInput {
    email: string;
    password: string;
}
