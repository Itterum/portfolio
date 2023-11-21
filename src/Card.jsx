import { createSignal } from "solid-js";
import styled from "@suid/system/styled";
// import {
//   Card,
//   CardContent,
// } from "@suid/material";

const CardContainer = styled("div")({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingBottom: "20px",
});

const CardWrapper = styled("div")({
  backgroundColor: "white",
  borderRadius: "44px",
  width: "600px",
  margin: "0 30px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out"
});

const CardContent = styled("div")({
  textAlign: "center",
});

const CustomCard = ({ title, content }) => {
  const [isCardVisible, setCardVisible] = createSignal(false);

  const toggleCardVisibility = () => {
  };

  const handleMouseEnter = () => {
    setCardVisible(true);
  };

  const handleMouseLeave = () => {
    setCardVisible(false);
  };

  return (
    <CardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translateY(${isCardVisible() ? 0 : "50%"})` }}>

      <CardContent>
        <img src={content} alt={title} style={{ width: "100%" }} />
      </CardContent>
    </CardWrapper>
  );
};

const CardGroup = () => {
  return (
    <CardContainer>
      <CustomCard title="Card 1" content="film1.png" />
      <CustomCard title="Card 2" content="film2.png" />
      <CustomCard title="Card 2" content="film3.png" />
      <CustomCard title="Card 2" content="film4.png" />
      <CustomCard title="Card 2" content="film5.png" />
      <CustomCard title="Card 2" content="film6.png" />
      {/* Добавьте еще карточек, если нужно */}
    </CardContainer>
  );
};

export default CardGroup;