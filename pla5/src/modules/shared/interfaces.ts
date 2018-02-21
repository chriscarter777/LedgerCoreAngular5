export interface Account {
    id: number;
    active: boolean;
    balance: number;
    acctType: string;
    institution: string;
    interest: number;
    limit?: number;
    name: string;
    number: string;
}

export interface Category {
    id: number;
    name: string;
    tax: boolean;
    type: string;
}

export interface Payee {
    id: number;
    balance: number;
    defaultAcct?: number;
    defaultAmt?: number;
    defaultCat?: number;
    name: string;
}

export interface Transaction {
    id: number;
    acctFrom: number;
    acctTo: number;
    amount: number;
    category: number;
    comment: string;
    date: string;
    payeeFrom: string;
    payeeTo: string;
    tax: boolean;
}

export interface User {
    admin: boolean;
    id: string;
    userName: string
}
