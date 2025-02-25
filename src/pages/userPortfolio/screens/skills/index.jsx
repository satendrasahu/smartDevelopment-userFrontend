import React from "react";
import { StyledSkillsContainer } from "./styles/style";
import DesignedCard1 from "../../../../components/cards/designCards/designedCard1/DesignedCard1";
import DesignedCard2 from "../../../../components/cards/designCards/designedCard2/DesignedCard2";
import DesignedCard3 from "../../../../components/cards/designCards/designedCard3/DesignedCard3";
import DesignedCard4 from "../../../../components/cards/designCards/designedCard4/DesignedCard4";
import DesignedCard5 from "../../../../components/cards/designCards/designedCard5/DesignedCard5";
import DesignedCard6 from "../../../../components/cards/designCards/designedCard6/DesignedCard6";
import DesignedCard7 from "../../../../components/cards/designCards/designedCard7/DesignedCard7";
import { PrimaryText } from "../../../../assets/css/common.styles";
import { Box } from "@mui/material";
import NeonText from "../../../../components/ui_kit/Headings/TextAnimationTwo/AnimationTwo";
import { colors } from "../../../../theme/colors";
import DesignedCard8 from "../../../../components/cards/designCards/designedCard8/DesignedCard8";
import useSkillsHook from "./hooks/useSkillsHook";

const SkillsData = () => {
  const {
    t,
    fronEndSkills,
    backEndSkills,
    databaseSkills,
    collaborationSkills,
    testingSkills,
    versionControllSkills,
    deploymentSkills,
    toolsSkills,
  } = useSkillsHook();
  return (
    <StyledSkillsContainer>
      <NeonText title={t("skills")} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("frontEnd")}
        </PrimaryText>
        <DesignedCard1 listData={fronEndSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("backEnd")}
        </PrimaryText>
        <DesignedCard2 listData={backEndSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("dataBase")}
        </PrimaryText>
        <DesignedCard3 listData={databaseSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("collaboration")}
        </PrimaryText>
        <DesignedCard4 listData={collaborationSkills} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("testing")}
        </PrimaryText>
        <DesignedCard5 listData={testingSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("versionControl")}
        </PrimaryText>
        <DesignedCard6 listData={versionControllSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("tools")}
        </PrimaryText>
        <DesignedCard8 listData={toolsSkills} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <PrimaryText
          className="fullscreen-heading"
          props={{
            color: colors.primary.btnColor,
            fontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("deployMent")}
        </PrimaryText>
        <DesignedCard7 listData={deploymentSkills} />
      </Box>
    </StyledSkillsContainer>
  );
};

export default SkillsData;
