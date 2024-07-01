export interface Key {
    code: string;
    name: string;
    led?: boolean;
}

export type RowOfKeys = Key[];

export type KeyboardLayout = RowOfKeys[];
