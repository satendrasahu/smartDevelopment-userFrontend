import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { HeaderLinksComponents } from './style';

const HeaderLinks = (props) => {
  const { renderLinksData } = props;
  return (
    <HeaderLinksComponents container>
      {renderLinksData?.map(linkData => (
        <NavLink
          to={linkData?.srcUrl}
          key={uuidv4()}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {linkData?.name}
        </NavLink>
      ))}
    </HeaderLinksComponents>
  );
}

HeaderLinks.defaultProps = {
  renderLinksData: [],
};

export default memo(HeaderLinks);
