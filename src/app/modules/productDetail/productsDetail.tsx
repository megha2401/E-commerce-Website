import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../../shared/services/Service";
import ImageCarousel from "./imageCarousel";
import "./productDetail.css";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
// import ViewCart from "../cart/viewCart";
import CircularProgress from "@mui/material/CircularProgress";
import LoginForm from "../logIn/logIn";

export interface ProductDetails {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  thumbnail: string;
  images: string[];
}

type ProductDetailProps = {
  cart: ProductDetails[];
  setCart: React.Dispatch<React.SetStateAction<ProductDetails[]>>;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ cart, setCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetails | undefined>();
  const [quantity, setQuantity] = useState(1);

  const centerRef = useRef<HTMLDivElement>(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email") || "";
    const password = localStorage.getItem("password") || "";
    setIsLoggedIn(Boolean(email && password));
    if (id) {
      const productId = parseInt(id, 10);
      fetchProductById(productId)
        .then((res) => {
          setProduct(res.data);
          centerRef.current?.scrollIntoView({ behavior: "smooth" });
        })

        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem("isLoggedIn") || "false"
    );
    const isCartEmpty = cart.length === 0;
    if (!isUserLoggedIn && isCartEmpty) {
      setShowLoginPopup(true);
    }
  }, [cart]);

  const handleAddToCart = () => {
    if (product) {
      const itemToAdd: ProductDetails = {
        id: product.id,
        title: product.title,
        brand: product.brand,
        description: product.description,
        price: product.price,
        quantity: quantity,
        thumbnail: product.thumbnail,
        images: product.images,
      };
      const CartList = [...cart, itemToAdd];
      setCart(CartList);
      localStorage.setItem("CartItem", JSON.stringify(CartList));
    }
    alert("Product added to cart!");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!product) {
    return (
      <Box
        ref={centerRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container className="product-detail-container">
      <Grid item xs={6} className="product-image">
        <ImageCarousel images={product.images} />
      </Grid>
      <Grid item xs={6} className="product-details">
        <Typography variant="h4" className="product-title">
          {product.title}
        </Typography>
        <Typography variant="subtitle1" className="product-brand">
          By {product.brand}
        </Typography>
        <Typography variant="body1" className="product-description">
          {product.description}
        </Typography>
        <Divider style={{ margin: "16px 0" }} />
        <Typography variant="h6" className="product-price">
          Price: ${product.price.toFixed(2)}
        </Typography>
        <TextField
          className="product-actions"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          InputProps={{ inputProps: { min: 1 } }}
          style={{ margin: "16px 0" }}
        />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          style={{ marginRight: "16px" }}
        >
          Add to Cart
        </Button>

        <Link to={"/cart"}>
          <Button
            variant="contained"
            color="primary"
            className="view-cart-button"
            onClick={() => {
              if (!isLoggedIn) setShowLoginPopup(true);
            }}
          >
            View Cart
          </Button>
        </Link>
      </Grid>
      {showLoginPopup && !isLoggedIn && (
        <LoginForm
          onClose={() => setShowLoginPopup(false)}
          onLogin={handleLogin}
        />
      )}
    </Grid>
  );
};

export default ProductDetail;
