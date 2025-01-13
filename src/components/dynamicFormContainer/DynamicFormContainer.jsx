import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { StyledGridItem } from "./style";
import { PrimaryButton } from "../../assets/css/common.styles";

const DynamicFormContainer = (props) => {
  const { renderForm,StyledGridItemProps } = props;
  const [forms, setForms] = useState([{ id: Date.now(), value: "" }]);

  // Add a new form
  const addForm = () => {
    setForms([...forms, { id: Date.now(), value: "" }]);
  };

  // Delete a form
  const deleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  // Edit form value
  const editForm = (id, newValue) => {
    setForms(
      forms.map((form) =>
        form.id === id ? { ...form, value: newValue } : form
      )
    );
  };

  return (
    <>
      {forms?.map((form, index) => (
        <StyledGridItem key={form.id} {...StyledGridItemProps} item>
          {renderForm({ form, index, editForm, deleteForm })}
        </StyledGridItem>
      ))}

      <PrimaryButton onClick={addForm} props={{height:"fit-content !important"}}>
        Add Form
      </PrimaryButton>
    </>
  );
};

export default DynamicFormContainer;
