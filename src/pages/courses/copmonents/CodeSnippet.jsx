
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  prism,
  tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledCodeSnippet } from "./style";

const CodeSnippet = ({ code, language, editorTheme }) => {
  const style = editorTheme === "light" ? prism : tomorrow;


  const syntaxHighlighterStyle = {
    backgroundColor: "inherit", 
  };
  return (
    <StyledCodeSnippet editorTheme={editorTheme}>
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={syntaxHighlighterStyle}
      >
        {code}
      </SyntaxHighlighter>
    </StyledCodeSnippet>
  );
};

export default CodeSnippet;
