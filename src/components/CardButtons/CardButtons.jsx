import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CardContext } from "../../context/CartContext";
import "./CardButtons.css"


const CartButtons = ({ customStyle, productId}) => {
  //DEBEMOS PASARLO COMO UN ARRAY
  const {count, setCount} = useContext(CardContext);
  const [state, setState] = useState(0);

  const handleClick = () => {
    
    setState(state + 1);
  };
  const handleClickRes = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };
  const addToCart = () => {
    if (count && count.Tecnologia) {
      const existingProduct = count.Tecnologia.find((p) => p.productId === productId);
      if (existingProduct) {
        existingProduct.qtyItems += state;
        setCount((prevState) => ({ ...prevState }));
      } else {
        const newProduct = {
          productId,
          qtyItems: state,
        };
        setCount((prevState) => ({
          ...prevState,
          qtyItems: prevState.qtyItems + state,
          Tecnologia: [...prevState.Tecnologia, newProduct],
        }));
      }
    }
  };
  
  return (
    <div className="d-flex align-items-center">
      <div className="w-25">
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClickRes}
        > 
        -
        </Button>
        <span>{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClick}
        >
        +
        </Button>
      </div>
      <Button 
      className="ml-2" 
      variant="primary"
      onClick={addToCart}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
