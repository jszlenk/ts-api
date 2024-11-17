export class Department {
    private readonly _id: string;
    private _name: string;
    private _description: string;

    constructor(data: DepartmentInterface) {
        this._id = data.id;
        this._name = data.name;
        this._description = data.description;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    set name(newName: string) {
        this._name = newName;
    }

    set description(newDescription: string) {
        this._description = newDescription;
    }
}

interface DepartmentInterface {
    id: string;
    name: string;
    description: string;
}