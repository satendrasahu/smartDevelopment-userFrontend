import React from "react";
import { Card, Description, IconBox, Title } from "./style";

const DesignedCard10 = (props) => {
  const { id, icon, title, description } = props;
  return (
    <Card key={id}>
      <IconBox>{icon}</IconBox>
      <Title variant="h5">{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default DesignedCard10;
