import { Grid, List, ListItemText, Typography } from "@mui/material";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <Grid container className="footer-container">
        <Grid item className="footer-grid">
          <Typography variant="h4">About</Typography>
          <List className="footer-list">
            <ListItemText primary="Contact us" />
            <ListItemText primary=" About us" />
            <ListItemText primary="Carriers" />
            <ListItemText primary="Flipkart Stories" />
            <ListItemText primary="Flipkart Wholesale" />
            <ListItemText primary="Corporate Information" />
          </List>
        </Grid>

        <Grid item className="footer-grid">
          <Typography variant="h4">Help</Typography>
          <List className="footer-list">
            <ListItemText primary="Payments" />
            <ListItemText primary="Shipping" />
            <ListItemText primary="Cancellation And returns" />
            <ListItemText primary="FAQ" />
            <ListItemText primary="Report and Infringment" />
          </List>
        </Grid>
        <Grid item className="footer-grid">
          <Typography variant="h4">Consumer policy</Typography>
          <List className="footer-list">
            <ListItemText primary="Cancellation And Returns" />
            <ListItemText primary="Term of use" />
            <ListItemText primary="Security" />
            <ListItemText primary="Privacy" />
          </List>
        </Grid>
        <Grid item className="footer-grid">
          <Typography variant="h4">Social</Typography>
          <List className="footer-list">
            <ListItemText primary="Facebook" />
            <ListItemText primary=" Twitter" />
            <ListItemText primary="You Tube" />
          </List>
        </Grid>

        <Grid item className="footer-address">
          <Typography variant="h4">Mail Us</Typography>
          <Typography variant="subtitle2">
            Flipkart Internet Private Limited
          </Typography>
          <Typography variant="subtitle2">
            Buildings Alyssa , Begonia &
          </Typography>
          <Typography variant="subtitle2">
            Clove Embassy Tech Village,
          </Typography>
          <Typography variant="subtitle2">
            Outer Ring Road,Devarabeesanahalli Village,
          </Typography>
          <Typography variant="subtitle2">Bengaluru,560103</Typography>
          <Typography variant="subtitle2">Karnataka,India</Typography>
        </Grid>

        <Grid item className="footer-address">
          <Typography variant="h4">Registered Office Address</Typography>
          <Typography variant="subtitle2">
            Flipkart Internet Private Limited
          </Typography>
          <Typography variant="subtitle2">
            Buildings Alyssa , Begonia &
          </Typography>
          <Typography variant="subtitle2">
            Clove Embassy Tech Village,
          </Typography>
          <Typography variant="subtitle2">
            Outer Ring Road,Devarabeesanahalli Village,
          </Typography>
          <Typography variant="subtitle2">Bengaluru,560103</Typography>
          <Typography variant="subtitle2">Karnataka,India</Typography>
          <Typography variant="subtitle2">CIN:U51109KA2012PTC066107</Typography>
          <Typography variant="subtitle2">Telephone:044-45614700</Typography>
        </Grid>
      </Grid>
      <Grid container className="footer-container-two">
        <Grid margin={"auto"}>
          <Typography>@2007-2003 Flipkart.com</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
