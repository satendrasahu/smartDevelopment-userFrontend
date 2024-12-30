import React from "react";
import { StyledSkillsContainer } from "./style";
import CircleCards from "../../../components/cards/designCards/firstDesign/CircleCards";
import CirclesWithWaves from "../../../components/cards/designCards/secondDesing/CirclesWithWaves";
import StandingCards from "../../../components/cards/designCards/thirdDesign/StandingCards";
import FourthDesign from "../../../components/cards/designCards/fourthDesign/FourthDesign";
import FifthDesignedCard from "../../../components/cards/designCards/fifthDesign/FifthDesignedCard";
const listData = [
  {
    color :"#fff",
    icon: "fa-bicycle" ,
    title: "Step 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.",
    accentColor: "#b8df4e", // Dynamic color
  },
  {
    color :"#fff",
    icon: "fa-car",
    title: "Step 2",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.",
    accentColor: "#4cbccb", 
  },
  {
    color :"#fff",
    icon: "fa-helicopter",
    title: "Step 3",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.",
    accentColor: "#7197d3", // Dynamic color
  },
  {
    color :"#fff",
    icon: "fa-plane",
    title: "Step 4",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.",
    accentColor: "#ae78cb", // Dynamic color
  },
  {
    color :"#fff",
    icon: "fa-rocket",
    title: "Step 5",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.",
    accentColor: "#7dc7a4", // Dynamic color
  },
  {
    color :"#fff",
    icon: "fa-bus",
    title: "Step 6",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.",
    accentColor: "#f078c2", // Dynamic color
  },
];

const itemsData = [
  {
    color: '#0D6EFD',
    icon: 'fa-brands fa-codepen',
    title: 'Codepen',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?',
     accentColor: "#0D6EFD"
  },
  {
    color: '#6710F5',
    icon: 'fa-brands fa-html5',
    title: 'HTML 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    accentColor: "#6710F5",
  },
  {
    color: '#6F42C1',
    icon: 'fa-brands fa-css3',
    title: 'CSS 3',
    description: 'Lorem ipsum dolor sit.',
    accentColor: "#6F42C1"
  },
  {
    color: '#D63384',
    icon: 'fa-brands fa-js',
    title: 'Javascript',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.',
     accentColor: "#D63384"
  },
  {
    color: '#DC3545',
    icon: 'fa-brands fa-github',
    title: 'Github',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    accentColor: "#DC3545"
  },
];

const SkillsData = () => {
  return <StyledSkillsContainer>
    <CircleCards listData={listData}/> 
    <CirclesWithWaves/>
    <StandingCards listData={itemsData}/>
    <FourthDesign listData={itemsData}/>
    <FifthDesignedCard listData={itemsData}/>
  </StyledSkillsContainer>;
};

export default SkillsData;
