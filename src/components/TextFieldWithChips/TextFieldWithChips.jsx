import React, { useState } from "react";
import { Chip, Box } from "@mui/material";
import TextField from "../textField/TextField";

const TextFieldWithChips = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const trimmedSkill = inputValue.trim();
      if (trimmedSkill !== "" && !skills.includes(trimmedSkill)) {
        setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
        setInputValue("");
      }
    }
  };

  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <TextField
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Box mt={2}>
        {skills?.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            onDelete={() => handleDeleteSkill(index)}
            style={{ margin: 2 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TextFieldWithChips;
