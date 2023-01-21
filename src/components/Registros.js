import styled from "styled-components";

export default function Registros(){
    return (
        <Container>
            <h1>Não há registros de saídas!</h1>
        </Container>

    )
}

const Container = styled.div`
  width: 326px;
  height: 400px;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  position: relative;
  background: white;
  line-height: 1.4;
  h1 {
    width: 180px;
    color: #868686;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    position: absolute;
    left: 70px;
    top: 180px;
  }
`