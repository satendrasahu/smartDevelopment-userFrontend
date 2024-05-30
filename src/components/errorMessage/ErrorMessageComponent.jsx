import { ErrorMessage } from "formik";
import React from "react";
import { StyledMessageError } from "./style";
import { useTranslation } from "react-i18next";

const ErrorMessageComponent = ({ name }) => {
  const { t } = useTranslation();

  return (
    <ErrorMessage name={name}>
      {(msg) => <StyledMessageError>{t(msg)}</StyledMessageError>}
    </ErrorMessage>
  );
};

export default ErrorMessageComponent;
