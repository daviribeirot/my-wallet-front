import styled from "styled-components";

export default function Registro({ transactions }) {

    const credit = transactions
        .filter(item => item.type === "credit")
        .reduce((total, value) => Number(total + value.value), 0);

    const debit = transactions
        .filter(item => item.type === "debit")
        .reduce((total, value) => Number(total + value.value), 0);
    const total = Number(credit - debit);

    return (
        <>
            {transactions
                ? transactions.map(({ date, description, type, value }, i) => (
                    <Extract key={i}>
                        <Date>{date}</Date>
                        <Description>{description}</Description>

                        <ValueContainer>
                            <Value type={type}>R${value?.toFixed(2)}</Value>
                        </ValueContainer>
                    </Extract>
                ))
                : ""
            }
            <Saldo transactions={transactions}><p>SALDO : </p>
                <span total={total}>
                    R${total.toFixed(2)}
                </span>
            </Saldo>
        </>
    )
}

const Extract = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
overflow: scroll;
 `

const Date = styled.span`
color: #C6C6C6;
margin-right: 8px;
`
const Description = styled.span`
width: 120px;
font-size: 15px;
`
const ValueContainer = styled.div`
display: flex;
align-items: center;
`

const Value = styled.p`
color: ${props => props.type === "debit" ? ("#C70000") : ("#03AC00")};
font-weight: 500;
`
const Saldo = styled.span`
width: 300px;
display: flex;
justify-content: space-between;
text-transform: uppercase;
color: #000000;
position: absolute;
bottom: 15px;
left: 14px;
p{
font-weight: 800;
left: 10vh;
 }
span{
/* color: ${props => props.total < 0 ? ("#03AC00") : ("#C70000")} ; */
color: black;
position:fixed;
left: 35vh;
font-weight: 500;
 }
`

