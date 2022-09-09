import { useState } from "react";
import styled from "styled-components";
import { Container } from "./Header";

const Button = styled.button`
  border: 0.5px solid lightgray;
  color: #61dafb;
  background: none;
  cursor: pointer;
`;
const MoveSpan = styled.span`
  text-align: center;
  flex: 2;
  font-size: 12px;
  font-weight: lighter;
  margin: auto;
  font-weight: 500;
`;
const ImgContainer = styled.div`
  margin-right: 3px;
  width: 15px;
  height: 15px;
  object-fit: cover;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;
const MoveOut = ({ item, moveUp }) => {
  const [room, setRoom] = useState(item.room);

  const handleClick = () => {
    setRoom((prev) => prev + 1);
    moveUp(item.id);
  };
  return (
    <Container>
      <MoveSpan>{item.date}</MoveSpan>
      <MoveSpan>{item.id}</MoveSpan>
      <MoveSpan
        style={{ display: "flex", fontSize: "10px", color: " #61dafb" }}
      >
        <ImgContainer>
          <Img src="download.jpg" />
        </ImgContainer>
        {item.address}
      </MoveSpan>
      <MoveSpan>{room}</MoveSpan>
      <MoveSpan>{item.location}</MoveSpan>
      <MoveSpan style={{ color: " #61dafb" }}>{item.last_occupant}</MoveSpan>
      <MoveSpan>{item.usd}</MoveSpan>
      <MoveSpan>{item.balance}</MoveSpan>
      <MoveSpan>
        <Button onClick={handleClick}>Flip-room</Button>
      </MoveSpan>
    </Container>
  );
};

export default MoveOut;
