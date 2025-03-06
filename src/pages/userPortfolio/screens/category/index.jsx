import React from "react";
import { CardContainer, ContactItems } from "./styles/style";
import DesignedCard9 from "../../../../components/cards/designCards/designedCard9/DesignedCare9";
import { v4 as uuidv4 } from "uuid";
import useCategoryHook from "./hooks/useCategoryHook";
import { PrimaryText } from "../../../../assets/css/common.styles";
import { colors } from "../../../../theme/colors";

const Category = () => {
  const { categoriesData,t } = useCategoryHook();
  return (
    <CardContainer>
      <PrimaryText
              className="fullscreen-heading"
              props={{
                color: colors.primary.btnColor,
                fontSize: "clamp(2rem, 2.5vw, 3rem)",
                fontWeight: "900",
                marginBottom :"5rem"
              }}
            >
              {t("allCategories")}
            </PrimaryText>
      <ContactItems>
        {categoriesData.map((CategoriesData) => (
          <DesignedCard9 {...CategoriesData} key={uuidv4()} />
        ))}
      </ContactItems>
    </CardContainer>
  );
};
export default Category;
