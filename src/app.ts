import { Product } from "./entities/product";
import data from "../data.json";
import { Cart } from "./entities/cart";

for (const product of data) {
  new Product(
    product.name,
    product.category,
    product.price,
    product.image.desktop
  ).toHTML();
}