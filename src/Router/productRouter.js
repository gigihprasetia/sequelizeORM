import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controller/Product.js";

const ProductRouter = express.Router();

ProductRouter.get(`/Products`, getAllProduct);
ProductRouter.get(`/Product/:id`, getProductById);
ProductRouter.post(`/createProduct`, createProduct);
ProductRouter.delete(`/deleteProduct/:id`, deleteProduct);
ProductRouter.patch(`/updateProduct/:id`, updateProduct);

export default ProductRouter;
