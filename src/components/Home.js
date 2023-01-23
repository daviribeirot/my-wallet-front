import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Registros from "./Registros";

export default function Home() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Container>
            <TitleContainer>
                <h1>Olá, {user.name}</h1>
                <ion-icon name="exit-outline" onClick={() => {
                    localStorage.clear();
                    navigate("/");
                }}></ion-icon>
            </TitleContainer>
            
            <Registros />

            <ButtonContainer>
                <Link to="/nova-entrada">
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br /> entrada</p>
                    </button>
                </Link>

                <Link to="/nova-saida">
                    <button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br /> saída</p>
                    </button>
                </Link>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
  height: 100vmax;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  background-color: #8B23BE; 
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF;
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

const ButtonContainer = styled.div`
        width: 326px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;
        
        button {
            color: white;
            background: #A328D6;
            width: 155px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            padding: 10px;
            font-size: 16px;
            text-align: left;
            border: none;
            border-radius: 5px;
            ion-icon {
                font-size: 26px;
            }
        }

        a{
            text-decoration: none;
        }
`