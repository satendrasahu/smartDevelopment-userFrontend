import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code, language, editorTheme }) => {
  const style = editorTheme === 'light' ? prism : tomorrow;

  const containerStyle = {
    backgroundColor: editorTheme === 'light' ? '#FFFFFF' : '#282c34',
  };

  return (
    <div style={containerStyle}>
      <SyntaxHighlighter language={language} style={style}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
