import React, { useMemo, useState } from "react";
import { Box } from "@mui/material";
import TextField from "../textField/TextField";
import { StyledChip, StyledList, StyledListItem } from "./style";
import { outputTypeList } from "./constant";
import { useFormikContext } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import {
  CenteredItemBox,
  StyledIconButton,
} from "../../assets/css/common.styles";
import TextArea from "../textArea/TextArea";

const TextFieldWithChips = (props) => {
  const { outputType, name } = props;
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the skill being edited
  const { setValues } = useFormikContext();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmedSkill = inputValue.trim();

      if (editIndex !== null) {
        // Update the skill being edited
        if (trimmedSkill !== "") {
          setSkills((prevSkills) =>
            prevSkills.map((skill, index) =>
              index === editIndex ? trimmedSkill : skill
            )
          );
          setEditIndex(null);
          setInputValue("");
        }
      } else {
        // Add a new skill
        if (trimmedSkill !== "" && !skills.includes(trimmedSkill)) {
          setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
          setInputValue("");
        }
      }
    }
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleEditSkill = (index) => {
    setInputValue(skills[index]);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const trimmedSkill = inputValue.trim();
      if (trimmedSkill !== "") {
        setSkills((prevSkills) =>
          prevSkills.map((skill, index) =>
            index === editIndex ? trimmedSkill : skill
          )
        );
        setEditIndex(null);
        setInputValue("");
      }
    }
  };

  useMemo(() => {
    setValues((prev) => {
      return { ...prev, [name]: skills };
    });
  }, [skills]);

  const renderOutput = () => {
    switch (outputType) {
      case outputTypeList.LIST:
        return (
          <StyledList>
            {skills.map((skill, index) => (
              <StyledListItem key={index}>
                {index === editIndex ? (
                  <TextArea
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    styledProps={{ width: "100%" }}
                    name={index}
                  />
                ) : (
                  skill
                )}
                <CenteredItemBox sx={{ marginLeft: "auto" }}>
                  {index === editIndex ? (
                    <>
                      <StyledIconButton
                        onClick={() => handleDeleteSkill(index)}
                      >
                        <DeleteIcon />
                      </StyledIconButton>
                      <StyledIconButton onClick={handleSaveEdit}>
                        <CheckIcon />
                      </StyledIconButton>
                    </>
                  ) : (
                    <>
                      <StyledIconButton onClick={() => handleEditSkill(index)}>
                        <EditIcon />
                      </StyledIconButton>
                      <StyledIconButton
                        onClick={() => handleDeleteSkill(index)}
                      >
                        <DeleteIcon />
                      </StyledIconButton>
                    </>
                  )}
                </CenteredItemBox>
              </StyledListItem>
            ))}
          </StyledList>
        );

      default:
        return (
          <>
            {skills?.map((skill, index) => (
              <StyledChip
                key={index}
                label={skill}
                onDelete={() => handleDeleteSkill(index)}
                style={{ margin: 2 }}
              />
            ))}
          </>
        );
    }
  };

  return (
    <>
      <TextField
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {skills.length > 0 && <Box mt={2}>{renderOutput()}</Box>}
    </>
  );
};

export default TextFieldWithChips;
