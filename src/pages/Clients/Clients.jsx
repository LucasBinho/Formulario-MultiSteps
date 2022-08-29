import { useContext} from "react";
import { UserInfo } from "../../Context/context";
import { Link } from "react-router-dom";
import "./Clients.css";

export const Clients = () => {
  const { arrayOfCards } = useContext(UserInfo);


  return (
    <div className="clientFlex">
        <h1>Lista de Clientes Cadastrados:</h1>
      <div className="clients">
        {arrayOfCards.map((client, index) => (   
              <Link className="singleClient" to={`/Client/${index + 1}`} key={index}><p>{`Cadastro ${index + 1}: ${client.firstName} ${client.lastName}`}</p></Link>
        ))}
      </div>
    </div>
  );
};
