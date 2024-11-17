export class Product {
    private readonly _id: string;
    private _name: string;
    private _description: string;
    private _price: number;

    constructor(data: {
        id: string;
        name: string;
        description: string;
        price: number;
    }) {
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
        this._price = data.price;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get description(): string {
        return this._description;
    }

    set description(newDescription: string) {
        this._description = newDescription;
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        this._price = newPrice;
    }
}