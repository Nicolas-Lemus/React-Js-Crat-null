import React, { useContext, useState, useEffect } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";

import { CardContext } from "../context/CartContext";
import CartDetail from "../components/CartDetail/CartDetail";

const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const productRefs = ids.map((id) => doc(collection(db, "Tecnologia"), id));

  const productSnapshots = await Promise.all(
    productRefs.map((productRef) => getDoc(productRef))
  );
  const Tecnologia = productSnapshots.map((productSnapshot) => {
    console.log(productSnapshot);
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });
  
  return Tecnologia.filter((product) => product !== null);
};

const Checkout = () => {
  const [error, setError] = useState(false);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { count } = useContext(CardContext);

  useEffect(() => {
    if (count && count.Tecnologia) {
      const ids = count.Tecnologia.map((product) => product.productID);

      fetchProductsByIds(ids)
        .then((res) => {
          setProductData(res);
        })
        .catch((err) => setError(err))
        .then(() => setLoading(false));
    }
  }, [count]);

  console.log('count:', count);

  return loading ? (
    <div>cargando...</div>
  ) : error ? (
    <div>algo salió mal</div>
  ) : (
    <div>
      <div>
        {productData.map((product) => (
          <CartDetail
            key={product.id}
            Tecnologia={product}
            qtyItems={count.Tecnologia.find((item) => item.productID === product.ID)}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
