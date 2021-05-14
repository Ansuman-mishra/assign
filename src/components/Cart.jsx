import React from "react";

function Cart(props) {
   const { cartItems, onAdd, onRemove } = props;
   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col">
                  <h2>Cart Items</h2>
                  <div>
                     {cartItems.length === 0 && <div>Cart is empty</div>}
                     {cartItems.map((item) => (
                        <div key={item.id} className="row">
                           <div className="col-2">{item.name}</div>
                           <div className="col-2">
                              <button
                                 onClick={() => onRemove(item)}
                                 className="btn btn-danger rounded-circle btn-sm"
                              >
                                 -
                              </button>{" "}
                              <button
                                 onClick={() => onAdd(item)}
                                 className="btn btn-primary rounded-circle btn-sm"
                              >
                                 +
                              </button>
                           </div>

                           <div className="col-2 text-right">
                              {item.qty} x &#8377;{item.price.toFixed(2)}
                           </div>
                        </div>
                     ))}

                     {cartItems.length !== 0 && (
                        <>
                           <hr></hr>

                           <div className="row">
                              <div className="col-2">
                                 <strong>Total Price</strong>
                              </div>
                              <div className="col-1 text-right">
                                 <strong>&#8377;{itemsPrice}</strong>
                              </div>
                           </div>
                           <hr />
                           <div className="row">
                              <button
                                 className="btn btn-blue rounded-pill"
                                 onClick={() => alert("Checkout")}
                              >
                                 Checkout
                              </button>
                           </div>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Cart;
