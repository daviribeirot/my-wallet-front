import styled from "styled-components";

export default function NovaSaida() {
    return (
        <Container>
            <TitleContainer>
                <h1>Nova saida</h1>
            </TitleContainer>

            <Form>
                <input
                    placeholder="Valor"
                    type="number"
                    required
                />

                <input
                    placeholder="Descrição"
                    type="text"
                    required
                />

                <button>
                    Salvar saída
                </button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    height: 100vmax;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    background: #8B23BE;
    font-family: "Raleway";
`
const TitleContainer = styled.div`
    width: 326px;
    height: 40px;
    margin: 25px auto;
    margin-bottom: 10px;
    text-align: left;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    color: white;
    ion-icon {
        font-size: 26px;
        cursor: pointer;
        }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0 25px;
    
    button {
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    margin-bottom: 36px;
  }

  input{
    margin-bottom: 13px;
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
`