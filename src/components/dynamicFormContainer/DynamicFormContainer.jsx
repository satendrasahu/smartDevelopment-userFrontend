import React, { useState } from "react";
import { StyledGridItem } from "./style";
import { StyledIconButton } from "../../assets/css/common.styles";

import AddIcon from "@mui/icons-material/Add";
const DynamicFormContainer = (props) => {
  const { renderForm, StyledGridItemProps } = props;
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
          {renderForm({
            form,
            length: forms?.length,
            deleteForm,
            editForm,
            index,
          })}
        </StyledGridItem>
      ))}

      <StyledIconButton
        onClick={addForm}
        props={{ height: "fit-content !important", margin: "1rem" }}
      >
        <AddIcon />
      </StyledIconButton>
    </>
  );
};

export default DynamicFormContainer;
