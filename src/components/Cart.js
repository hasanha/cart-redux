import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slices";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cart_id = useSelector((state) => state.cart.id);
  console.log(cart_id);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const totalItems = cart.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);
  console.log(cart);
  return (
    <Container>
      <h1 className="py-5">My Cart</h1>
      <h5>Total Price : {totalPrice.toFixed(2)} $</h5>
      <h5>Items Num : {totalItems} </h5>
      <Button variant="primary" onClick={() => dispatch(clear())}>
        Clear
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.image}
                  alt="c"
                  style={{ height: "100px", width: "100px" }}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;
