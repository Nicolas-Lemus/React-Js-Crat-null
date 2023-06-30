import React from "react";

const CartDetail = ({  qtyItems , Tecnologia}) => {

  return (
    <div>
      <div>
        <div>
          <img src={Tecnologia.images} alt={Tecnologia.title}/>
        </div>
        <div>
          <h2>{Tecnologia.title}</h2>
          <p>Precio: ${Tecnologia.price}</p>
          <p>Cantidad: {qtyItems.qtyItems}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
