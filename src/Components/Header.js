import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 15px;
padding: 10px;
`
const Span = styled.span`
text-align: center;
flex: 1;
font-size: 15px;
margin: auto;
font-weight: 500;
`

const Header = () => {
  return (
    <Container>
        <Span>Move-out-date</Span>
        <Span>ID</Span>
        <Span>address</Span>
        <Span>Room</Span>
        <Span>Location</Span>
        <Span>Last Occupant</Span>
        <Span>USD</Span>
        <Span>Balance</Span>
        <Span>{``}</Span>
    </Container>
  )
}

export default Header