import React from "react";

function Card(props) {
   const { product, onAdd } = props;
   return (
      <>
         <div className="col-md-4">
            <div className="card">
               <div className="card-header">
                  <h2>{product.name}</h2>
               </div>
               <div className="card-body">
                  <img
                     className="small"
                     src={product.image}
                     alt={product.name}
                     //    width="400px"
                  />
                  <p>&#8377;{product.price}</p>
               </div>
               <div className="card-footer">
                  <button
                     className="btn btn-outline-primary"
                     onClick={() => onAdd(product)}
                  >
                     Add To Cart
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Card;
