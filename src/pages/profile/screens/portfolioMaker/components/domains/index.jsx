import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../../assets/css/common.styles";
import { StyledDomainsContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import { initialValues, domainsSchema } from "./schema";
import useDomain from "./hooks/useDomain";
import DynamicFormContainer from "../../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../../components/textField/TextField";
import TextArea from "../../../../../../components/textArea/TextArea";

const Domains = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, domainsLoader, domainsData } = useDomain();

  const renderForm = ({ form, deleteForm, length }) => (
    <Formik
      initialValues={() => initialValues(domainsData)}
      validationSchema={() => domainsSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            label={t("domainName")}
            value={values?.domainName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="domainName"
            placeHolder={t("placeholderText", {
              text: t("domainName"),
            })}
            isRequired
          />

          <TextField
            label={t("projectLink")}
            value={values.projectLink}
            onChange={handleChange}
            onBlur={handleBlur}
            name="projectLink"
            placeHolder={t("placeholderText", {
              text: t("projectLink"),
            })}
            isRequired
          />
          <TextArea
            outerLabel={t("description")}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            name="description"
            placeHolder={t("placeholderText", {
              text: t("description"),
            })}
            isRequired
          />

          <CenteredItemBox props={{ width: "100%" }}>
            {length > 1 && (
              <StyledIconButton onClick={() => deleteForm(form.id)}>
                <DeleteIcon />
              </StyledIconButton>
            )}
            <StyledIconButton type="submit" disabled={domainsLoader}>
              <DoneIcon />
            </StyledIconButton>
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledDomainsContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editDomainsDetails")}
          </PrimaryText>
          <Switch
            // checked={showChatNotification}
            // onChange={handleSwitchChange}
            // value={showChatNotification}
            inputProps={{ "aria-label": "controlled" }}
          />
        </CenteredItemBox>
        <Grid container alignItems="center" justifyContent="center">
          <DynamicFormContainer
            StyledGridItemProps={{
              xs: 12,
              lg: 6,
            }}
            renderForm={renderForm}
          />
        </Grid>
      </Box>
    </StyledDomainsContainer>
  );
};

export default Domains;
