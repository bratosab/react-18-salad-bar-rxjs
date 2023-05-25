import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { chooseTopping, loadToppings, selectTotalPrice, selectTotalPriceMemo } from "../store/saladSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Topping } from "../models/topping.model";

export function Salad() {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.app.name);
  const allToppings = useAppSelector((state) => state.salad.allToppings);
  const price = useAppSelector(selectTotalPriceMemo);
  const price2 = useAppSelector(selectTotalPriceMemo);
  const price3 = useAppSelector(selectTotalPriceMemo);

  useEffect(() => {
    dispatch(loadToppings());
  }, [dispatch]);

  const selectTopping = (topping: Topping) => {
    dispatch(chooseTopping(topping));
  };

  return (
    <>
      <h1>Salad</h1>
      <p>Welcome {name}</p>
      <p>Total price: {price} {price2} {price3} €</p>
      <List>
        {allToppings &&
          allToppings.map((topping) => (
            <ListItem key={topping.name} onClick={() => selectTopping(topping)}>
              <ListItemButton>
                <ListItemText
                  primary={topping.name}
                  secondary={`${topping.price} €`}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </>
  );
}
