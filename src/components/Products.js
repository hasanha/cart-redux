import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/products-slices";
import { addToCart } from "../rtk/slices/cart-slices";
import { useState } from "react";
function Products() {
  const [qvalue, setQvalue] = useState("");
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Form>
      <Container className="py-5">
        <Row className="py-5">
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description.slice(0, 12)}...</Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    id="quantity"
                    size="sm"
                    type="number"
                    defaultValue={0}
                    min="0"
                    onChange={(e) => {
                      setQvalue(e.target.value);
                    }}
                  />

                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart({ product, quantity: qvalue }));
                    }}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Form>
  );
}
export default Products;
