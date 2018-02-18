export interface Account {
    id: number;
    active: boolean;
    balance: number;
    acctType: string;
    defaultAcct?: number;
    defaultAmt?: number;
    defaultCat?: number;
    institution: string;
    interest: number;
    limit?: number;
    name: string;
    number: string;
    owned: boolean;
}

export interface Category {
    id: number;
    name: string;
    tax: boolean;
    type: string;
}

export interface Transaction {
    id: number;
    acctFrom: number;
    acctTo: number;
    amount: number;
    category: number;
    date: string;
    tax: boolean;
}

export interface User {
    admin: boolean;
    id: string;
    userName: string
}
