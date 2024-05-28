import React, { useState } from "react";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledAccordion } from "./style";
import {
  CenteredItemBox,
  SecondaryText,
  StyledDivider,
} from "../../assets/css/common.styles";
import { useTheme } from "@emotion/react";

const CustomAccordion = (props) => {
  const { title, subtitle, details, count } = props;
  const theme = useTheme();
  const [expandedcount, setExpandedcount] = useState(null);

  const handleChange = (count) => (_, isExpanded) => {
    setExpandedcount(isExpanded ? count : null);
  };

  console.log("details",details)
  return (
    <StyledAccordion expanded={expandedcount === count} onChange={handleChange(count)}>
      <AccordionSummary
        expandIcon={
          count &&  expandedcount !== count? (
            <CenteredItemBox props={{ color: theme.colors.extra.whiteColor }}>
              <Typography>{count}</Typography> <ExpandMoreIcon />
            </CenteredItemBox>
          ) : (
            <CenteredItemBox props={{ color: theme.colors.extra.whiteColor }}>
             <ExpandMoreIcon /> <Typography className="count">{count}</Typography> 
            </CenteredItemBox>
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
        className="accordion-summery"
      >
        {title}
      </AccordionSummary>

      <StyledDivider />
      <AccordionDetails className="accordion-details">
        {/* <SecondaryText>{subtitle}</SecondaryText> */}
        {details}
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
