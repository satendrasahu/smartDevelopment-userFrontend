import { Box } from "@mui/material";
import { PrimaryText } from "../../../../../assets/css/common.styles";
import { colors } from "../../../../../theme/colors";

const SkillSection = ({ title, data, Component }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <PrimaryText
        className="fullscreen-heading"
        props={{
          color: colors.primary.btnColor,
          fontSize: "clamp(2rem, 2.5vw, 3rem)",
          fontWeight: "900",
        }}
      >
        {title}
      </PrimaryText>
      <Component listData={data} />
    </Box>
  );
};

export default SkillSection;
