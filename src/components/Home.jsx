import React, { useState } from "react";
import data from "../data.js";
import MainCard from "./MainCard.jsx";
import Cart from "./Cart.jsx";

function Home() {
   const { products } = data;
   const [cartItems, setCartItems] = useState([]);
   const [isSubmited, setSubmited] = useState(false);
   //    const history = useHistory();
   const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
         setCartItems(
            cartItems.map((x) =>
               x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
         );
      } else {
         setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
   };

   const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
         setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
         setCartItems(
            cartItems.map((x) =>
               x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
         );
      }
   };

   const submited = (e) => {
      e.preventDefault();
      setSubmited(true);
   };
   return (
      <>
         {isSubmited ? (
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
         ) : (
            <div className="container">
               <div className="row">
                  <div className="col">
                     <MainCard
                        products={products}
                        onAdd={onAdd}
                        countCartItems={cartItems.length}
                     />
                  </div>
               </div>
               <div className="row mt-5">
                  <div className="col">
                     <form action="">
                        <input
                           onClick={submited}
                           className="float-right btn btn-primary"
                           value="go to cart"
                        />
                     </form>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default Home;
