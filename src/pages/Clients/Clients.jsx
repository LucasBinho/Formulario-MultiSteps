import { useContext } from "react";
import { UserInfo } from "../../Context/context";
import { CardClient } from "./CardClient";
import './Clients.css'

export const Clients = () => {

// const { userDetailsOne, userDetailsTwo, userDetailsThree, SetArrayOfCards, arrayOfCards } = useContext(UserInfo);


const { arrayOfCards } = useContext(UserInfo);




//  SetCardValues({...userDetailsOne, ...userDetailsTwo, ...userDetailsThree});


    return(
        <div className="clientFlex">
            <div className="clients">
                {arrayOfCards.map((card, index)=>(
                    <CardClient
                        key={index}
                        nome={card.firstName}
                        sobrenome={card.lastName}
                        email={card.email}
                        telefone={card.phone}
                        cep={card.cep}
                        endereço={card.adress}
                        complemento={card.complement}
                        data={card.bornDate}
                        cpf={card.cpf}
                        renda={card.monthlyIncome}
                    />
                ))}
            </div>
        </div>
    )
}