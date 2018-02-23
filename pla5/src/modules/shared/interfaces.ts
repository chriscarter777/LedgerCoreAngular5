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

export interface LedgerLine {
    assets: number;
    balances: number[];
    liabilities: number;
    net: number;
    transaction: Transaction;
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
    check: number;
    comments: string;
    date: string;
    flag0: boolean;
    flag1: boolean;
    flag2: boolean;
    flag3: boolean;
    payeeFrom: string;
    payeeTo: string;
    reconciled: boolean;
    tax: boolean;
}

export interface User {
    admin: boolean;
    id: string;
    userName: string
}
