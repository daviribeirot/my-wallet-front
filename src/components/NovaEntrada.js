import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { makeTransactions } from "../services/services";

export default function NovaEntrada() {
    const [form, setForm] = useState({ value: "", description: "" });
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
            
        };

        const body = {
            ...form, value: parseInt(form.value), type: "credit"
        }

        makeTransactions(body, config)
        .then(() => {
            navigate("/home");
        })
        .catch((err) => {
            console.log(err);
            alert("Algo deu errado!");
        })
    }

    return (
        <Container>
            <TitleContainer>
                <h1>Nova entrada</h1>
            </TitleContainer>

            <Form onSubmit={handleSubmit}>
                <input
                    name="value"
                    placeholder="Valor"
                    value={form.value}
                    onChange={handleForm}
                    type="number"
                    required
                />

                <input
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={handleForm}
                    type="text"
                    required
                />

                <button type="submit">
                    Salvar entrada
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