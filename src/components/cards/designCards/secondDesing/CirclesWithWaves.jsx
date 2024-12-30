import React from 'react';
import "./style.css"
const ULWithIcons = () => {
  return (
    <div style={{zIndex:0, position:'relative'}}>
      <ul className="ul-circles">
        <li style={{ '--accent-color': '#D3302C' }}>
          <i className="fa-brands fa-codepen"></i> Lorem Ipsum
        </li>
        <li style={{ '--accent-color': '#F3A22D' }}>
          <i className="fa-brands fa-html5"></i> Lorem Ipsum
        </li>
        <li style={{ '--accent-color': '#495460' }}>
          <i className="fa-brands fa-css3"></i> Lorem Ipsum
        </li>
      </ul>

      <ul className="ul-circles ul-circles-vertical">
        <li style={{ '--accent-color': '#D3302C' }}>
          <i className="fa-brands fa-codepen"></i> Lorem Ipsum
        </li>
        <li style={{ '--accent-color': '#F3A22D' }}>
          <i className="fa-brands fa-html5"></i> Lorem Ipsum
        </li>
        <li style={{ '--accent-color': '#495460' }}>
          <i className="fa-brands fa-css3"></i> Lorem Ipsum
        </li>
      </ul>
    </div>
  );
};

export default ULWithIcons;
