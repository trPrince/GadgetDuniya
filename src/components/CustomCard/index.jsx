import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import * as React from 'react';
import { ShoppingCart } from "@material-ui/icons";
import "./style.css";

const CustomCard = ({
  basket,
  product,
  addProduct,
  updateProduct,
  RemoveItemFromBasket,
}) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="custom-card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.id}
          height="260"
          className="card-image"
          image={product.image.url}
          title={product.name}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        />
        <CardContent className="content">
          <Typography
            className="title"
            gutterBottom
            variant="h6"
            component="h3"
          >
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {basket && (
        <CardActions>
          <Typography
            className="basket-item-price"
            gutterBottom
            variant="h6"
            component="h3"
          >
            {product.price.formatted_with_symbol}
          </Typography>
        </CardActions>
      )}
      <CardActions className="actions-content">
        {!basket && (
          <>
            <Typography
              className="price"
              gutterBottom
              variant="h6"
              component="h2"
            >
              {product.price.formatted_with_symbol}
            </Typography>
            <Button
              size="large"
              className="custom-button"
              onClick={() => {
                addProduct(product.id, 1);
              }}
            >
              <ShoppingCart /> Add to basket
            </Button>
          </>
        )}
        {basket && (
          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                RemoveItemFromBasket(product.id);
              }}
            >
              Remove
            </Button>
            <>
              <Button
                size="small"
                variant="outlined"
                className="increase-product-quantity"
                onClick={() => {
                  updateProduct(product.id, product.quantity + 1);
                }}
              >
                +
              </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  updateProduct(product.id, product.quantity - 1);
                }}
              >
                -
              </Button>
            </>
          </>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CustomCard;
