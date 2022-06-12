import { createContext } from "react";
import { faker } from "@faker-js/faker";

const Cart = createContext();

export const Context = ({ children }) => {
  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(100, 200, 0, "$"),
    image: faker.image.fashion(),
    inStock: faker.random.numeric(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.numeric(),
  }));
  console.log(products);

  return <Cart.Provider>{children}</Cart.Provider>;
};
