import React from "react";
import { DomainSectionContainer, DomainGridContainer } from "./style";
import DesignedCard10 from "../../../../components/cards/designCards/designedCard10/DesignedCard10";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../../assets/css/common.styles";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../theme/colors";

// Data for the domains with descriptions and project links
const domainsData = [
  {
    id: 1,
    icon: "🎮",
    title: "Online Gaming",
    description:
      "Led projects like Deuces, Onlybets, and BetCred, developing platforms for online casinos, sports betting, and Esports. Utilized React, Node.js, PostgreSQL, and Docker.",
    projectLink: "/projects/online-gaming",
  },
  {
    id: 2,
    icon: "💳",
    title: "Digital Financial Services",
    description:
      "Developed secure React.js-based applications for Nagad, focusing on responsive UI, API integration, and state management using Redux Toolkit.",
    projectLink: "/projects/financial-services",
  },
  {
    id: 3,
    icon: "👥",
    title: "Social Media Platforms",
    description:
      'Created "My Stories," a social platform for sharing memories. Worked on UI design, Redux state management, and comprehensive API testing.',
    projectLink: "/projects/social-media",
  },
  {
    id: 7,
    icon: "🛒",
    title: "Customer Interaction Platforms",
    description:
      "Created PosWebApp, allowing seamless communication between shopkeepers and customers for order and delivery management.",
    projectLink: "/projects/customer-platforms",
  },
  {
    id: 5,
    icon: "📋",
    title: "B2B Platforms",
    description:
      "Built AOR Demand and Portal, enabling tendering and procurement with secure API integration and bid management functionality.",
    projectLink: "/projects/b2b-platforms",
  },
  {
    id: 6,
    icon: "🏪",
    title: "Medical B2B E-commerce",
    description:
      "Developed a platform connecting medical shops and distributors for inventory management, payments, and order tracking.",
    projectLink: "/projects/medical-ecommerce",
  },

  {
    id: 8,
    icon: "🛍️",
    title: "Affiliate Marketing & E-commerce",
    description:
      "Built an online platform for affiliate marketing and shopping with features like product listing, cart management, and order tracking.",
    projectLink: "/projects/affiliate-ecommerce",
  },

  {
    id: 4,
    icon: "🏢",
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Contributed to TwERP, designing scalable backend systems and developing REST APIs with robust test coverage using Jest.",
    projectLink: "/projects/erp",
  },
];

const Domains = () => {
  const { t } = useTranslation();
  return (
    <DomainSectionContainer>
      <CenteredItemBox>
        <PrimaryText props={{ color: colors.extra.darkColor }}>
          {t("domains")}
        </PrimaryText>
      </CenteredItemBox>
      <DomainGridContainer>
        {domainsData?.map((domain) => (
          <DesignedCard10 {...domain} />
        ))}
      </DomainGridContainer>
    </DomainSectionContainer>
  );
};

export default Domains;
