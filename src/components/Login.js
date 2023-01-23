import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import {useState, useContext} from 'react'
import { UserContext } from "../contexts/UserContext";
import { signIn } from "../services/services";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleForm(e) {
      setForm({ ...form, [e.target.name]: e.target.value })
  }

    function handleLogin(e){
      e.preventDefault()

        signIn(form)
            .then(res => {
                const { idUsuario, name, email, token } = res.data;
                setUser({ idUsuario, name, email, token });
                localStorage.setItem("user", JSON.stringify({ idUsuario, name, email, token }));
                navigate("/home");
            })
            .catch(err => {
                alert(err.response.data);
            })
  }


    return (
            <Container>
                <LoginTitle>MyWallet</LoginTitle>

                <Form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                        required
                    />
                    <button type="submit">Entrar</button>
                </Form>

                <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
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
    width: 191px;
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
    margin-bottom: 36px;
  }
`;

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
