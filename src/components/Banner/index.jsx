import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./Gadgets.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h3">
              <Typography variant="h4">Welcome to</Typography>
              <Typography variant="h2">Gadget দুনিয়া</Typography>
            </Typography>
            <Button className="shopping-button" href="#products">
              Let's Shop!
            </Button>
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={logo} alt="Brand-tv" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
