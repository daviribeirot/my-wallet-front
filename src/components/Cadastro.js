import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
    return (
            <Container>
                <LoginTitle>MyWallet</LoginTitle>

                <Form>
                    <Input
                        type="name"
                        placeholder="Nome"
                        name="name"
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Confirme sua senha"
                        name="password"
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </Form>

                <Link to="/">Já tem uma conta? Entre agora!</Link>
            </Container>
    )
}

const Container = styled.div`
  height: 100vmax;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8B23BE;   
   
  a{
    width: 227px;
    height: 18px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration: none;
  } 
  
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
    margin-bottom: 32px;
  }
`

const LoginTitle = styled.h1`
    width: 147px;
    height: 50px;
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  background: #FFFFFF;
  margin-bottom: 13px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;