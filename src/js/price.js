import React from "react";

import "../css/price.css";
import Priceprops from './priceprops';
import Pricedata from './pricedata';

const Price = () => {
  return (
    <>
      <div className="heading">
        <h3>Pricing</h3>
        <p>Choose a pricing plan that fits your needs.</p>

        {/* <Priceprops /> */}

        {
            Pricedata.map((data) => {
                return (
                    <>
                        <Priceprops heading = {data.heading} storage={data.storage} emails = {data.emails} domain = {data.domain} support = {data.support}  month={data.month}/>
                    </>
                )
            })
        }
      </div>
    </>
  );
};

export default Price;
