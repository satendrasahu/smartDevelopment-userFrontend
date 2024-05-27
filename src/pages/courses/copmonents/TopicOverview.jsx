// TopicOverview.js
import React, { useState } from 'react';
import MainLayout from '../../../components/ui_kit/mainLayout/MainLayout';
import {
  CenteredItemBox,
  MainWrap,
  PrimaryText,
  StyledDivider,
} from '../../../assets/css/common.styles';
import CustomAccordion from '../../../components/accordion/CustomAccordion';
import { useTheme } from '@emotion/react';
import CodeSnippet from './CodeSnippet';
import { questionDetails } from './questionDetails';

const TopicOverview = () => {
  const theme = useTheme();
  const [editorTheme, setEditorTheme] = useState('light'); // Default to light theme
  const [language, setLanguage] = useState('javascript'); // Default language is JavaScript

  const toggleTheme = () => {
    setEditorTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const topicName = 'Complete Your KYC'

  return (
    <MainLayout header footer>
      <MainWrap>
        <CenteredItemBox>
          <StyledDivider props={{ width: '50%' }} />
        </CenteredItemBox>

        <CenteredItemBox>
          <PrimaryText
            props={{
              padding: theme.spacing(1),
              borderRadius: theme.spacing(1),
              border: `1px solid ${theme.colors.extra.highLightColor}`,
              boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
            }}
          >
            {topicName}
          </PrimaryText>
        </CenteredItemBox>

        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <StyledDivider />
        </CenteredItemBox>

        <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <select onChange={handleLanguageChange} value={language}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
          </select>
        </div>

        {questionDetails?.map((data) => (
          <CustomAccordion
            key={data.id}
            title={data.question}
            subtitle={data.overView}
            details={
              <div>
                <CodeSnippet code={data.answerLanguage[language]} language={language} editorTheme={editorTheme} />
              </div>
            }
            count={data.id}
          />
        ))}
      </MainWrap>
    </MainLayout>
  );
};

export default TopicOverview;
