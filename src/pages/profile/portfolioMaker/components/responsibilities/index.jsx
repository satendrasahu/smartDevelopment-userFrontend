import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../assets/css/common.styles";
import { StyledAboutMeContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import TextArea from "../../../../../components/textArea";
import { initialValues, responsibilitiesSchema } from "./schema";
import useResponsibilitiesInfo from "./hooks/useResponsibilitiesInfo";
import DynamicFormContainer from "../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
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
        <Form>
          <CenteredItemBox props={{ width: "100%" }}>
            <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
              {" "}
              {index + 1}.
            </PrimaryText>{" "}
            &nbsp;
            <TextArea
              styledProps={{ margin: "1rem 0rem", width: "100%" }}
              value={values.shortIntroText}
              onChange={handleChange}
              onBlur={handleBlur}
              name="responsibilities"
              placeHolder={t("placeholderText", {
                text: t("responsibilities"),
              })}
            />
            {length > 1 && (
              <StyledIconButton onClick={() => deleteForm(form.id)}>
                <DeleteIcon />
              </StyledIconButton>
            )}
            <StyledIconButton type="submit" disabled={responsibilitiesLoader}>
              <DoneIcon />
            </StyledIconButton>
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
