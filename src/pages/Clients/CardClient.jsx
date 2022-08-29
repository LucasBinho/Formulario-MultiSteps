import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { Button } from "../../components/Button/Button";
import { UserInfo } from "../../Context/context"
import './CardClient.css'


export const CardClient = () => {

    let { id } = useParams();
    const { arrayOfCards } = useContext(UserInfo);

    const showClient = arrayOfCards.filter((client, index)=> index + 1 == id)


    return(
        <div className="CardClient">
            <div className="singleCardClient">
                <h3>Nome: {showClient[0].firstName}{showClient[0].lastName}</h3>
                <p>Email: {showClient[0].email}</p>
                <p>Telefone: {showClient[0].phone}</p>
                <p>CEP: {showClient[0].cep}</p>
                <p>Endereço: {showClient[0].adress}</p>
                <p>Complemento: {showClient[0].complement}</p>
                <p>Data de Nascimento: {showClient[0].bornDate}</p>
                <p>CPF: {showClient[0].cpf}</p>
                <p>Renda Mensal: {showClient[0].monthlyIncome}</p>
                <Link to='/Clients'>
                    <Button name='Voltar'/>
                </Link>
            </div>
        </div>
    )
}