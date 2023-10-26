import React, { useState } from "react";
import "./header.css";
import { Grid, Typography, TextField, Button, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginForm from "../logIn/logIn";
import { useNavigate } from "react-router-dom";
import { RouteTypes } from "../../shared/utils/enum";

type Props = {
  onSearch: (title: string) => void;
};

const Header: React.FC<Props> = ({ onSearch }) => {
  const navigate = useNavigate();

  const [searchedTitle, setSearchedTitle] = useState<string>("");
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const handleRoute = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center" className="header">
        <Grid item xs={2} display={"inline-block"} className="logo">
          <Button
            onClick={() => handleRoute(RouteTypes.home)}
            style={{ cursor: "pointer" }}
          >
            <Grid>
              <Typography variant="h4" color="blueviolet">
                Flipkart
              </Typography>
              <Grid display={"flex"} justifyContent={"center"}>
                <Typography variant="h6" color="grey">
                  Explore
                </Typography>
                <Typography variant="h6" color="orange">
                  Plus
                </Typography>
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item xs={5} display={"flex"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for products, Brands and More"
            onChange={(data) => setSearchedTitle(data.target.value)}
          />
          <Button
            variant="contained"
            disabled={searchedTitle.length < 2}
            onClick={() => onSearch(searchedTitle)}
          >
            Search
          </Button>
        </Grid>

        <Grid item xs={1}>
          <Button
            sx={{ display: "inline-block" }}
            onClick={() => handleRoute(RouteTypes.cart)}
          >
            <ShoppingCartIcon sx={{ color: "black" }} />
            <Typography variant="subtitle2">Cart</Typography>
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            sx={{ display: "inline-block" }}
            onClick={() => handleRoute(RouteTypes.wishlist)}
          >
            <FavoriteIcon sx={{ color: "red" }} />
            <Typography variant="subtitle2">Wishlist</Typography>
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={openCarousel} sx={{ display: "inline-block" }}>
            <PersonIcon sx={{ color: "black" }} />
            <Typography variant="subtitle2">Sign In</Typography>
          </Button>
        </Grid>
      </Grid>
      <Divider />
      {isCarouselOpen && (
        <LoginForm onClose={closeCarousel} onLogin={() => {}} />
      )}
    </>
  );
};
export default Header;
