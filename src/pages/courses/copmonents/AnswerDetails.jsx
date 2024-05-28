import { Box, Fab, IconButton } from "@mui/material";
import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import { useTranslation } from "react-i18next";
import CopyButton from "../../../components/CopyField/CopyButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { useTheme } from "@emotion/react";
import {
  CenteredItemBox,
  SecondaryText,
} from "../../../assets/css/common.styles";

const AnswerDetails = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const [isTextCopied, setIsTextCopied] = useState({
    isCopy: false,
    message: "",
  });
  const [editorTheme, setEditorTheme] = useState("dark"); // Default to light theme
  const [language, setLanguage] = useState("javascript"); // Default language is JavaScript

  const theme = useTheme();
  const buttonSx = {
    background: theme.colors.primary.btnColor,
    height: 36,
    width: 36,
    zIndex: 1,
    "&:hover": {
      background: theme.colors.primary.btnHoverColor,
    },
  };

  const toggleTheme = () => {
    setEditorTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCopyClick = (copyData) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(copyData);
      const message = t("copiedtoClipBoard", { text: t("content") });
      setIsTextCopied({ isCopy: true, message });
    }
    setTimeout(() => {
      setIsTextCopied({ isCopy: false, message: "" });
    }, 10000);
  };
  const handleTheme = () => {};

  return (
    <>
      {isTextCopied?.isCopy && (
        <CenteredItemBox
          props={{ justifyContent: "right", paddingBottom: "20px" }}
        >
          <SecondaryText
            props={{
              color: theme.colors.primary.success,
              fontSize: theme.spacing(0.8),
            }}
          >
            {isTextCopied?.message}
          </SecondaryText>
        </CenteredItemBox>
      )}
      <CenteredItemBox
        props={{ justifyContent: "right", paddingBottom: "20px" }}
      >
        <select onChange={handleLanguageChange} value={language}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="html">HTML</option>
        </select>
        <IconButton onClick={handleTheme} aria-label="change theme">
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={toggleTheme}
          >
            {editorTheme === "light" ? (
              <Brightness5Icon fontSize="small" />
            ) : (
              <Brightness4Icon fontSize="small" style={{ color: "#000" }} />
            )}
          </Fab>
        </IconButton>

        <CopyButton
          value={data?.answerLanguage[language]}
          title={t(`yourRefferalCode`)}
          handleCopyClick={() =>
            handleCopyClick(data?.answerLanguage[language])
          }
          name=""
          copyTitleMessage={t("copyTitleMessage", {
            title: t("yourRefferalCode"),
          })}
          setIsTextCopied={setIsTextCopied}
          isTextCopied={isTextCopied}
        />
      </CenteredItemBox>

      <CenteredItemBox props={{ display: "block" }}>
        <CodeSnippet
          code={data?.answerLanguage[language]}
          language={language}
          editorTheme={editorTheme}
        />
      </CenteredItemBox>
    </>
  );
};

export default AnswerDetails;
