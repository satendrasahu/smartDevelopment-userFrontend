import { Fab, IconButton } from "@mui/material";
import React, { memo, useState } from "react";
import CodeSnippet from "./CodeSnippet";
import { useTranslation } from "react-i18next";
import CopyButton from "../../../components/copyField/CopyButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { useTheme } from "@emotion/react";
import {
  CenteredItemBox,
  SecondaryText,
} from "../../../assets/css/common.styles";
// import AutoCompleteDropDown from "../../../components/dropDown/AutoCompleteDropDown";
import { questionAnswerType } from "../../../utils/common.Data";

const AnswerDetails = (props) => {
  const { renderProps } = props;
  const { t } = useTranslation();
  const [isTextCopied, setIsTextCopied] = useState({
    isCopy: false,
    message: "",
  });
  const [editorTheme, setEditorTheme] = useState("dark"); // Default to light theme
  // const [language, setLanguage] = useState("javascript"); // Default language is JavaScript

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

  // const getSelectedValue = (data) => {
  //   setLanguage(data.value);
  // };

  const languagesData = [
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "HTML", value: "html" },
  ];

  return (
    <>
      {renderProps?.answers?.map((answer) => {
        if (answer?.answerType === questionAnswerType[0]) {
          return (
            <CenteredItemBox
              props={{
                justifyContent: "left",
                textAlign: "left",
                marginBottom: theme.spacing(1),
                background: theme.colors.primary.mainColor,
                padding: theme.spacing(0.5),
                borderRadius: theme.spacing(0.5),
              }}
            >
              {answer?.answerText}
            </CenteredItemBox>
          );
        } else if (answer?.answerType === questionAnswerType[1]) {
          return (
            <>
              {isTextCopied?.isCopy && (
                <CenteredItemBox
                  props={{ justifyContent: "right", paddingBottom: "20px" }}
                >
                  <SecondaryText
                    props={{
                      color: theme.colors.extra.successColor,
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
                {/* <AutoCompleteDropDown
                  renderData={languagesData}
                  placeHolder={t("selectDropDownValue", {
                    value: t("codeLanguages"),
                  })}
                  getSelectedValue={getSelectedValue}
                /> */}
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
                      <Brightness4Icon
                        fontSize="small"
                        style={{ color: "#000" }}
                      />
                    )}
                  </Fab>
                </IconButton>

                <CopyButton
                  handleCopyClick={() => handleCopyClick(answer?.answerText)}
                  isTextCopied={isTextCopied}
                />
              </CenteredItemBox>
              <CenteredItemBox props={{ display: "block" }}>
                <CodeSnippet
                  code={answer?.answerText}
                  language={renderProps?.questionAnswerLanguage}
                  editorTheme={editorTheme}
                />
              </CenteredItemBox>
            </>
          );
        } else if (answer?.answerType === questionAnswerType[2]) {
          return (
            <img
              style={{ height: 300 }}
              src={
                answer?.answerText ||
                "https://www.onlybets.tv/static/media/loyalty-2.7028b3d74d9977667d0c.png"
              }
              alt="image1"
            />
          );
        }
      })}
    </>
  );
};

export default memo(AnswerDetails);
