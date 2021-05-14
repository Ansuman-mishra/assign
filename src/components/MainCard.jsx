import React from "react";
import Card from "./Card";

function MainCard(props) {
   const { products, onAdd, countCartItems } = props;
   return (
      <>
         <h1>Product List</h1>
         <span>{countCartItems}</span>
         <div className="row">
            <div className="d-flex justify-align-content-between">
               {products.map((product) => (
                  <Card
                     key={product.id}
                     product={product}
                     onAdd={onAdd}
                     countCartItems={countCartItems}
                  />
               ))}
            </div>
         </div>
      </>
   );
}

export default MainCard;
