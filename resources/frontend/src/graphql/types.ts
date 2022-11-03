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
