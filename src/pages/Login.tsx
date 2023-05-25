import { useState } from "react";
import { Uuid } from "../utils/Uuid";
import { Box, Button, TextField, Typography } from "@mui/material";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { setOrderId, setOrderName } from "../store/appSlice";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const id = Uuid.generate();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const chooseIngredients = () => {
    console.log(id, name);
    dispatch(setOrderName({ name }));
    dispatch(setOrderId({ id }));

    navigate(`/salad/${id}`);
  };

  return (
    <>
      <Typography variant="h3">Welcome to Salad Bar</Typography>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <TextField
          label="What's your name?"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" onClick={chooseIngredients}>
          Choose my ingredients
        </Button>
      </Box>
    </>
  );
}
