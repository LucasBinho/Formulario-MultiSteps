import { useState } from "react";
import { Button } from "../../components/Button/Button"
import { useContext } from "react";
import { UserInfo } from "../../Context/context";
import './Register.css'
import { Link } from "react-router-dom";

export const RegisterThirdPage = () => {

    const [bornDate, setBornDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const { userDetailsOne, userDetailsTwo, setUserDetailsThree, userDetailsThree, SetArrayOfCards, arrayOfCards } = useContext(UserInfo)
    
   
    function handleSubmit() {  
        setUserDetailsThree({
            bornDate,
            cpf,
            monthlyIncome
        });

        const newClient = {...userDetailsOne, ...userDetailsTwo, ...userDetailsThree}
        
        SetArrayOfCards([...arrayOfCards, newClient])

        console.log('terceiroForm', userDetailsThree)
       
    }
    
    
        

    return (
        <div className="registerPageThree">
            <div className="pageThreeCard">
                <h1 className="formTitle">Formulário de Cadastro</h1>
                <form className="formPageThree">
                    <label htmlFor="dataNasc">Data de Nascimento:</label>
                    <input 
                    onChange={(e)=>{setBornDate(e.target.value)}}
                    className="inputPageThree" 
                    type="date" 
                    />
                    <label htmlFor="CPF">CPF:</label>
                    <input 
                    onChange={(e)=>{setCpf(e.target.value)}}
                    className="inputPageThree" 
                    type="text" 
                    />
                    <label htmlFor="renda">Renda Mensal:</label>
                    <input 
                    onChange={(e)=>{setMonthlyIncome(e.target.value)}}
                    className="inputPageThree" 
                    type="text" 
                    />
                    <Link to='/Clients'>
                    <Button onClick={handleSubmit}  name='Salvar'/>
                    </Link>
                </form>
            </div>
        </div>
    )
}