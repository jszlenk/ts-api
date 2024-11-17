import {PrismaClient} from "@prisma/client";
import {Request, Response} from "express";
import {Employee} from '../models/employee.model'

const db = new PrismaClient();

const getAllEmployees = async (req: Request, res: Response): Promise<Response> => {
    const employees = await db.employee.findMany();
    return res.json(employees.map((employee) => new Employee(employee)));
};

const getEmployeeById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const employee = await db.employee.findUnique({where: {id}});

    if (!employee) {
        return res.status(404).json({message: "Employee not found"});
    }

    return res.json(new Employee(employee));
};

const createEmployee = async (req: Request, res: Response): Promise<Response> => {
    const {name, email, phone, address, salary} = req.body;

    if (!name || !email || !phone || !address || !salary) {
        return res.status(400).json({message: "Invalid employee data"});
    }

    const employee = await db.employee.create({
        data: {name, email, phone, address, salary},
    });
    return res.json(new Employee(employee));
};

const updateEmployee = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const {name, email, phone, address, salary} = req.body;

    if (!name || !email || !phone || !address || !salary) {
        return res.status(400).json({message: "Invalid employee data"});
    }

    const employee = await db.employee.update({
        where: {id},
        data: {name, email, phone, address, salary},
    });

    if (!employee) {
        return res.status(404).json({message: "Employee not found"});
    }

    return res.json(new Employee(employee));
};

const deleteEmployee = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;

    const employee = await db.employee.delete({where: {id}});

    if (!employee) {
        return res.status(404).json({message: "Employee not found"});
    }

    return res.json(employee);
};

export {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};