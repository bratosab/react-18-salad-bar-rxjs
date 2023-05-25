import { Topping } from "../models/topping.model";

export function fetchToppings(): Promise<Topping[]> {
  return new Promise<Topping[]>((resolve, reject) => {
    const toppings: Topping[] = [
      { name: "Cucumber", price: 0.5 },
      { name: "Bacon", price: 0.7 },
      { name: "Olives", price: 0.2 },
      { name: "Sausages", price: 0.8 },
      { name: "Onion", price: 0.4 },
      { name: "Cheese", price: 0.5 },
      { name: "Beer", price: 4.5 },
    ];

    setTimeout(() => {
      resolve(toppings);
    }, 500);
  });
}
