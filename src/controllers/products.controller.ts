import {PrismaClient} from "@prisma/client";
import {Request, Response} from "express";
import {Product} from '../models/product.model'

const db = new PrismaClient();

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    const products = await db.product.findMany();
    const transformedProducts = products.map(
        (p) => new Product({ id: p.id, name: p.name, description: p.description, price: p.price })
    );
    return res.json(transformedProducts);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};
const getProductById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const product = await db.product.findUnique({where: {id}});

    if (!product) return res.status(404).json({message: "Product not found"});

    return res.json(product);
};

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, description, price } = req.body;

    const product = new Product({
      id: "",
      name,
      description,
      price,
    });

    const newProduct = await db.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
      },
    });

    return res.status(201).json(new Product(newProduct));
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const updateProduct = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const {name, description, price} = req.body;

    if (!name || !description || !price)
        return res.status(400).json({message: "Invalid product data"});

    const productData = {
        name,
        description,
        price,
    };

    const product = await db.product.update({
        where: {id},
        data: productData,
    });

    if (!product) return res.status(404).json({message: "Product not found"});

    return res.json(product);
};

const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;

    const product = await db.product.delete({where: {id}});

    if (!product) return res.status(404).json({message: "Product not found"});

    return res.json(product);
};

export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};