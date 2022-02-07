import { useCart } from "react-use-cart";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from "react-router-dom";

export function Cart() {
  const history=useHistory()
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="cart">
      <h1>Cart ({totalUniqueItems})</h1>
      <div className="cart-items">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <div className="cart-footer">
      <Button variant="outlined"
       onClick={()=>history.push("/")}
      >buy more</Button>
      <Button variant="outlined">pay</Button>
        <h2>Total Rs.{cartTotal}</h2>
      </div>
      {/* <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

function Item({ item }) {
  const { updateItemQuantity, removeItem, cartTotal } = useCart();
  console.log(item);
  return (
    <div className="item">
      <div className="cart-left">
        <img className="cart-img" src={item.pic} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <p>Rs.{item.price}/kg</p>
      <div className="quantity">
        <p>{item.quantity}</p>
        <div className="quantity-buttons">
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          variant="contained"
          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
        >
          <RemoveIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => removeItem(item.id)}
        >
          <CloseIcon />
        </IconButton>
        </div>
        
      </div>
    </div>
  );
}
