import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserInfo } from "../../Context/context";
import "./Register.css";

export const RegisterFirstPage = () => {
  const steps = [
    {
      id: "PersonalData",
      title: "Dados pessoais",
    },
    {
      id: "Adress",
      title: "Endereço ",
    },
    {
      id: "AdditionalData",
      title: "Informações Adicionais",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [complement, setComplement] = useState("");
  const [bornDate, setBornDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");

  const { arrayOfCards, setArrayOfCards } = useContext(UserInfo);

  function handleNextStep() {
    setCurrentStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    setCurrentStep((prev) => prev - 1);
  }

  function handleSubmit() {

    const newClient = {
      firstName,
      lastName,
      email,
      phone,
      cep,
      adress,
      complement,
      bornDate,
      cpf,
      monthlyIncome,
    };

    setArrayOfCards([...arrayOfCards, newClient]);
  }

  return (
    <div className="registerPageOne">
      <div className="pageOneCard">
        <h1 className="formTitle">Formulário de Cadastro</h1>
        <h3 className="step">
          Parte {currentStep + 1} de {steps.length}
        </h3>
        <form>
          {steps[currentStep].id === "PersonalData" && (
            <div className="formPageOne">
              <label htmlFor="Nome">Nome:</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="inputPageOne"
                type="text"
              />
              <label htmlFor="Sobrenome">Sobrenome:</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="inputPageOne"
                type="text"
              />
              <label htmlFor="email">E-mail:</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="inputPageOne"
                type="text"
              />
              <label htmlFor="telefone">Telefone:</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="inputPageOne"
                type="text"
              />
            </div>
          )}
          {steps[currentStep].id === "Adress" && (
            <div className="formPageTwo">
              <label htmlFor="CEP">CEP:</label>
              <input
                onChange={(e) => {
                  setCep(e.target.value);
                }}
                className="inputPageTwo"
                type="text"
              />
              <label htmlFor="EndUm">Endereço:</label>
              <input
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
                className="inputPageTwo"
                type="text"
              />
              <label htmlFor="EndTwo">Complemento:</label>
              <input
                onChange={(e) => {
                  setComplement(e.target.value);
                }}
                className="inputPageTwo"
                type="text"
              />
            </div>
          )}
          {steps[currentStep].id === "AdditionalData" && (
            <div className="formPageThree">
              <label htmlFor="dataNasc">Data de Nascimento:</label>
              <input
                onChange={(e) => {
                  setBornDate(e.target.value);
                }}
                className="inputPageThree"
                type="date"
              />
              <label htmlFor="CPF">CPF:</label>
              <input
                onChange={(e) => {
                  setCpf(e.target.value);
                }}
                className="inputPageThree"
                type="text"
              />
              <label htmlFor="renda">Renda Mensal:</label>
              <input
                onChange={(e) => {
                  setMonthlyIncome(e.target.value);
                }}
                className="inputPageThree"
                type="text"
              />
            </div>
          )}
          <div className="buttons">
            {currentStep > 0 && (
              <Button name="Voltar" onClick={handlePreviousStep} />
            )}

            {currentStep < steps.length - 1 && (
              <Button
                name="Próximo"
                onClick={handleNextStep}
              />
            )}

            {currentStep === steps.length - 1 && (
              <Link to="/Clients">
                <Button name="Salvar" onClick={(e) => handleSubmit(e)} />
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
