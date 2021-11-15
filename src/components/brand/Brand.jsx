import React from "react";
import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
  return (
    <div className="gpt__brand section__padding">
      <ul className="gpt__brand-icons">
        <li>
          <img src={google} alt={google} />
        </li>
        <li>
          <img src={slack} alt={slack} />
        </li>
        <li>
          <img src={atlassian} alt={atlassian} />
        </li>
        <li>
          <img src={dropbox} alt={dropbox} />
        </li>
        <li>
          <img src={shopify} alt={shopify} />
        </li>
      </ul>
    </div>
  );
};

export default Brand;
