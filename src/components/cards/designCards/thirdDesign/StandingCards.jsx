import React from 'react';
import "./style.css"
import { Box } from '@mui/material';

const StandingCards = (props) => {
const {listData}= props

  return (
    <Box className="mainBox">
        {listData?.map((item, index) => (
          <Box className='designedCard' key={index} style={{ '--accent-color': item.color }}>
            <Box className="icon"><i className={item.icon}></i></Box>
            <Box className="title">{item.title}</Box>
            <Box className="descr">{item.description}</Box>
          </Box>
        ))}
      </Box>
  );
};

export default StandingCards;
