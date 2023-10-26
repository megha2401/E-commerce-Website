import React, { useEffect } from "react";
import { ProductDetails } from "../productDetail/productsDetail";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

interface ViewCartProps {
  cart: ProductDetails[];
  setCart: React.Dispatch<React.SetStateAction<ProductDetails[]>>;
}

const ViewCart: React.FC<ViewCartProps> = ({ cart, setCart }) => {
  useEffect(() => {
    const storedCartItem = localStorage.getItem("CartItem");
    if (storedCartItem) {
      setCart(JSON.parse(storedCartItem));
    }
  }, []);

  const removeItemFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("CartItem", JSON.stringify(updatedCart));
  };

  if (!cart || cart.length === 0) {
    return (
      <Grid item xs={12}>
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Your cart is empty.
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid item xs={12}>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} style={{ padding: "8px 0" }}>
            <Grid container display={"inline-block"}>
              <img
                src={item.thumbnail}
                alt={item.title}
                width={150}
                height={100}
              />
              <ListItemText
                primary={item.title}
                secondary={`Price: $${item.price.toFixed(2)} | Quantity: ${
                  item.quantity
                }`}
              />
              <Button
                variant="contained"
                onClick={() => removeItemFromCart(item.id)}
              >
                Remove
              </Button>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default ViewCart;
