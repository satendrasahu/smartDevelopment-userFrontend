import React from "react";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../../assets/css/common.styles";
import { colors } from "../../../../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Bottom, Glass, IconBox, Parent } from "./style";

const CardComponent = (props) => {
  const { title, description, icon } = props;
  return (
    <Parent>
      <Card className="card">
        <Glass className="glass" />
        <CenteredItemBox
          props={{
            transform: "translate3d(0, 0, 26px)",
            flexDirection: "column",
            height: "calc(100% - 3rem)",
            paddingBottom: "2.5rem",
          }}
        >
          <PrimaryText
            props={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: colors.extra.darkColor,
            }}
          >
            {title}
          </PrimaryText>
          {description && (
            <PrimaryText
              props={{
                fontSize: "0.8rem",
                fontWeight: 300,
                color: colors.extra.darkColor,
              }}
            >
              {description}
            </PrimaryText>
          )}
        </CenteredItemBox>
        <Bottom>
          <IconBox>
            <FontAwesomeIcon
              icon={icon}
              style={{
                color: colors.extra.newColor18,
              }}
            />
          </IconBox>
        </Bottom>
      </Card>
    </Parent>
  );
};

export default CardComponent;
