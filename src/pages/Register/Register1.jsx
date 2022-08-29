import { useState } from "react";
import { Button } from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserInfo } from "../../Context/context";
import './Register.css'

export const RegisterFirstPage = () => {

   

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const {  setUserDetailsOne } = useContext(UserInfo)
   
    function handleSubmit() {  
       
        setUserDetailsOne({
            firstName,
            lastName,
            email,
            phone
        });
    }

   

    return (
        <div className="registerPageOne">
            <div className="pageOneCard">
                <h1 className="formTitle">Formulário de Cadastro</h1>
                <form className="formPageOne">
                    <label htmlFor="Nome">Nome:</label>
                    <input 
                    onChange={(e)=>{setFirstName(e.target.value)}}
                    className="inputPageOne" 
                    type="text" 
                    />
                    <label htmlFor="Sobrenome">Sobrenome:</label>
                    <input 
                    onChange={(e)=>{setLastName(e.target.value)}}
                    className="inputPageOne" 
                    type="text" 
                    />
                    <label htmlFor="email">E-mail:</label>
                    <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="inputPageOne" 
                    type="text" 
                    />
                    <label htmlFor="telefone">Telefone:</label>
                    <input 
                    onChange={(e)=>{setPhone(e.target.value)}}
                    className="inputPageOne" 
                    type="text" 
                    />
                    <Link to='/Register-two'>
                    <Button onClick={handleSubmit} name='Próximo'/>
                    </Link>
                </form>
            </div>
        </div>
    )
}