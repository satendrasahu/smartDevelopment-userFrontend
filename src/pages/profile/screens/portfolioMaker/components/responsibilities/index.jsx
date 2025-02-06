import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
  PrimaryButton,
} from "../../../../../../assets/css/common.styles";
import { StyledAboutMeContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import TextArea from "../../../../../../components/textArea/TextArea";
import { initialValues, responsibilitiesSchema } from "./schema";
import useResponsibilitiesInfo from "./hooks/useResponsibilitiesInfo";
import DynamicFormContainer from "../../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextFieldWithChips from "../../../../../../components/TextFieldWithChips/TextFieldWithChips";
import { preventEnterKeyDefault } from "../../../../../../utils/common.function";
import { outputTypeList } from "../../../../../../components/TextFieldWithChips/constant";
import ButtonWithIcon from "../../../../../../components/buttons/ButtonWithIcon";
const Responsibilities = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, responsibilitiesLoader, responsibilitiesData } =
    useResponsibilitiesInfo();

  const renderForm = ({ form, index, length, deleteForm }) => (
    <Formik
      initialValues={initialValues}
      validationSchema={() => responsibilitiesSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form onKeyDown={preventEnterKeyDefault}>
          <TextFieldWithChips
            styledProps={{ margin: "1rem 0rem", width: "100%" }}
            value={values.responsibilities}
            onBlur={handleBlur}
            name="responsibilities"
            placeHolder={t("placeholderText", {
              text: t("responsibilities"),
            })}
            outputType={outputTypeList.LIST}
          />
          <CenteredItemBox
            className="myNewClass"
            props={{ width: "100%", justifyContent: "center", gap :"2rem" }}
          >
            {length > 1 && (
              <ButtonWithIcon
                icon={<DeleteIcon />}
                title={t("remove")}
                onClick={() => deleteForm(form.id)}
              />
            )}
            {values?.responsibilities?.length > 0 && (
             

              <ButtonWithIcon
                icon={<DoneIcon />}
                title={t("save")}
                type="submit"
                disabled={responsibilitiesLoader}
              />
            )}
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledAboutMeContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editResponsibilities")}
          </PrimaryText>
          <Switch
            // checked={showChatNotification}
            // onChange={handleSwitchChange}
            // value={showChatNotification}
            inputProps={{ "aria-label": "controlled" }}
          />
        </CenteredItemBox>
        <Grid container alignItems="center">
          <DynamicFormContainer
            StyledGridItemProps={{
              xs: 12,
            }}
            renderForm={renderForm}
          />
        </Grid>
      </Box>
    </StyledAboutMeContainer>
  );
};

export default Responsibilities;
