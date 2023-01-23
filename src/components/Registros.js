import styled from "styled-components";
import { useState, useEffect, useContext} from "react";
import { listTransactions } from "../services/services";
import { UserContext } from "../contexts/UserContext";
import Registro from "../components/Registro";

export default function Registros(){

  const user = useContext(UserContext)
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
          Authorization: `Bearer ${user.user.token}`
      }}
      
      listTransactions(config)
      .then((res) => setTransactions(res.data))
      .catch((err) => {
        console.log(err);
        alert("Deu alguma coisa errada");
      })
  }, []);

    return (
        <Container>
            {transactions.length === 0
                    ?
                    (<h1>Não há registros de entrada ou saída!</h1>)
                    :
                    <Moves>
                        <Registro transactions={transactions} />
                    </Moves>
                }
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
const Moves = styled.div`
  width: 326px;
  height: 340px;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  overflow-y: scroll;
  padding: 15px;
  margin: 0 auto;
`