import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./Cart";
import LGTV from "./assets/LGTV.jpg";
import NMAX from "./assets/NMAX.jpg";
import REF from "./assets/SamsungRef.jpg";
import Laptop from "./assets/Vivobook.jpg";
import Iphone from "./assets/Iphone.jpg";
import JBL from "./assets/JBL.jpg";
import Sinigang from "./assets/Sinigang.jpg";
import Polo from "./assets/Polo.jpg";

// Define the images object with the corresponding image sources
export const images = {
  0: { src: LGTV },
  1: { src: Laptop },
  2: { src: REF },
  3: { src: NMAX },
  4: { src: Iphone },
  5: { src: Sinigang },
  6: { src: Polo },
  7: { src: JBL },
};

function Items() {
  // State for storing the fetched items and the cart
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch items from the server when the component mounts
  useEffect(() => {
    axios.get("http://127.0.0.2:3450/items").then((res) => {
      setItems(res.data);
    });
  }, []);

  // Add an item to the cart
  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.Item === item.Item);
    if (itemIndex !== -1) {
      // If the item is already in the cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].Quantity += 1;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const updatedCart = [...cart, { ...item, Quantity: 1 }];
      setCart(updatedCart);
    }
  };

  return (
    <>
      <h1 className="Items">Items</h1>
      <div className="container">
        <div className="Card-container">
          {items.map((item, id) => {
            return (
              <div className="Card-items" key={id}>
                <div className="Picture-container">
                  <img
                    className="Pictures"
                    src={images[item.id].src} // Retrieve the image source based on the item ID
                    alt={item.Item}
                  />
                </div>
                <div className="title">
                  <p>{item.Item}</p>
                  <p className="Price">₱{item.Price}</p>
                </div>
                <div className="AddToCart">
                  <button onClick={() => addToCart(item)}>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
        <Cart className="Cart" cart={cart} />
      </div>
    </>
  );
}

export default Items;
