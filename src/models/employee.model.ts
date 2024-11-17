export class Employee {
    private readonly _id: string;
    private _name: string;
    private _email: string;
    private _phone: string;
    private _address: string;
    private _salary: number;

    constructor(data: {
        id: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        salary: number;
    }) {
        this._id = data.id;
        this._name = data.name;
        this._email = data.email;
        this._phone = data.phone;
        this._address = data.address;
        this._salary = data.salary;
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

    get email(): string {
        return this._email;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(newPhone: string) {
        this._phone = newPhone;
    }

    get address(): string {
        return this._address;
    }

    set address(newAddress: string) {
        this._address = newAddress;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(newSalary: number) {
        this._salary = newSalary;
    }
}