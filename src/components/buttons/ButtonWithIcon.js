import React, { memo } from "react";
import {
  PrimaryButton,
  PrimaryText,
  StyledIconButton,
} from "../../assets/css/common.styles";
import DoneIcon from "@mui/icons-material/Done";
import { colors } from "../../theme/colors";
const ButtonWithIcon = (props) => {
  const {
    icon,
    title,
    primaryButtonProps,
    StyledIconButtonProps,
    PrimaryTextProps,
    onClick,
    type,
    disabled,
  } = props;
  return (
    <PrimaryButton
      props={{
        position: "relative",
        ...primaryButtonProps,
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <StyledIconButton
        props={{
          position: "absolute",
          width: 55,
          height: 55,
          left: "-15px",
          border: `0.25rem solid ${colors.primary.btnColor}`,
          boxShadow: `
          inset 2px 2px 5px rgba(0, 0, 0, 0.5),  
          inset -2px -2px 5px rgba(0, 0, 0, 0.6), 
          2px 2px 4px rgba(0, 0, 0, 0.3),  
          -2px -2px 4px rgba(0, 0, 0, 0.6) 
        `,
          background: colors.primary.btnColor,
          ...StyledIconButtonProps,
        }}
      >
        {icon}
      </StyledIconButton>
      <PrimaryText
        props={{
          fontSize: "1rem",
          marginLeft: "2.5rem",
          ...PrimaryTextProps,
        }}
      >
        {title}
      </PrimaryText>
    </PrimaryButton>
  );
};

ButtonWithIcon.defaultProps = {
  title: "Button Title",
  icon: <DoneIcon />,
  onClick: () => {},
};
export default memo(ButtonWithIcon);
