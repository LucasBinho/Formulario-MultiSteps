import { useState } from "react";
import { Button } from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserInfo } from "../../Context/context";
import './Register.css'

export const RegisterSecondPage = () => {

    const [cep, setCep] = useState('');
    const [adress, setAdress] = useState('');
    const [complement, setComplement] = useState('');

    const { setUserDetailsTwo } = useContext(UserInfo)

    function handleSubmit() {  
        setUserDetailsTwo({
            cep,
            adress,
            complement
        });
    }

    return (
        <div className="registerPageTwo">
            <div className="pageTwoCard">
                <h1 className="formTitle">Formulário de Cadastro</h1>
                <form className="formPageTwo">
                    <label htmlFor="CEP">CEP:</label>
                    <input 
                    onChange={(e)=>{setCep(e.target.value)}}
                    className="inputPageTwo" 
                    type="text" 
                    />
                    <label htmlFor="EndUm">Endereço:</label>
                    <input 
                    onChange={(e)=>{setAdress(e.target.value)}}
                    className="inputPageTwo" 
                    type="text" 
                    />
                    <label htmlFor="EndTwo">Complemento:</label>
                    <input 
                    onChange={(e)=>{setComplement(e.target.value)}}
                    className="inputPageTwo" 
                    type="text" 
                    />
                    <Link to='/Register-three'>
                    <Button onClick={handleSubmit} name='Próximo'/>
                    </Link>
                </form>
            </div>
        </div>
    )
}