import React from "react";

const Priceprops = (props) => {
  return (
    <>
      <table>
        <tr>
          <th>{props.heading}</th>
        </tr>
        <tr>
          <td>{props.storage}</td>
        </tr>
        <tr>
          <td>{props.emails}</td>
        </tr>
        <tr>
          <td>{props.domain}</td>
        </tr>
        <tr>
          <td>{props.support}</td>
        </tr>
        <tr>
          <td>
            {props.month} <br />
            per month
          </td>
        </tr>
        <tr>
          <button class="w3-button w3-teal w3-padding-large">
            <i class="fa fa-check"></i> Sign Up
          </button>
        </tr>
      </table>
    </>
  );
};

export default Priceprops;
