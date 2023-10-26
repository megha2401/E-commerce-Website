import React from "react"; //  { useState, useEffect }
import "./ProductList.css";
import { Link } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
// import { fetchProducts } from "../../shared/services/Service";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";

export interface Product {
  id: number;
  brand: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
}

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  wishlist: number[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  isLoading,
  wishlist,
  setWishlist,
}) => {
  const handleAddToWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      const updatedWishlist = wishlist.filter((id) => id !== productId);
      setWishlist(updatedWishlist);
    } else {
      const storeWishList = [...wishlist, productId];
      setWishlist(storeWishList);
      localStorage.setItem("favitemlist", JSON.stringify(storeWishList));
    }
  };
  console.log(wishlist);

  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [prod, setProd] = useState<Product[]>([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchProducts()
  //     .then((res: any) => {
  //       const { products } = res.data;
  //       setProd(products);
  //       // setFilteredProducts(products);
  //     })
  //     .catch((err: Error) => {
  //       console.log(err);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  const isInWishlist = (productId: number) => wishlist.includes(productId);

  return (
    <>
      <div className="main">
        <div className="product-list">
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            products.map((item) => (
              <Grid container key={item.id} className="product">
                <Box
                  className="wishlist"
                  onClick={() => handleAddToWishlist(item.id)}
                  style={{ color: isInWishlist(item.id) ? "red" : "black" }}
                >
                  <FavoriteIcon />
                </Box>
                <Link to={`/product/${item.id}`} className="link">
                  <img
                    src={item.thumbnail}
                    alt="images"
                    height={150}
                    width={200}
                  />
                  <h4>
                    {item.brand}:-{item.title}
                  </h4>
                  {/* <h4>{item.title}</h4> */}
                  {/* <h4>{item.description}</h4> */}
                  <Typography className="price" variant="h6">
                    Price:-${item.price}
                  </Typography>
                </Link>
              </Grid>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default ProductList;
