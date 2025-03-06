import React from "react";
import { v4 as uuidv4 } from "uuid";
import { DomainSectionContainer, DomainGridContainer } from "./style";
import DesignedCard10 from "../../../../components/cards/designCards/designedCard10/DesignedCard10";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../../assets/css/common.styles";
import { colors } from "../../../../theme/colors";
import useDomainsHook from "./hooks/useDomainsHook";


const Domains = () => {
  const { domainsData, t } = useDomainsHook();
  return (
    <DomainSectionContainer>
      <CenteredItemBox>
        <PrimaryText
          props={{
            color: colors.extra.darkColor,
            ontSize: "clamp(2rem, 2.5vw, 3rem)",
            fontWeight: "900",
          }}
        >
          {t("domains")}
        </PrimaryText>
      </CenteredItemBox>
      <DomainGridContainer>
        {domainsData?.map((domain) => (
          <DesignedCard10 {...domain}  key={uuidv4()}/>
        ))}
      </DomainGridContainer>
    </DomainSectionContainer>
  );
};

export default Domains;
