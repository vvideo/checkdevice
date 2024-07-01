export interface Key {
    code: string;
    name: string;
}

export type RowOfKeys = Key[];

export type KeyboardLayout = RowOfKeys[];
