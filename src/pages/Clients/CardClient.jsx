export const CardClient = (props) => {
    return(
        <div>
            <p>Nome: {props.nome}</p>
            <p>Sobrenome: {props.sobrenome}</p>
            <p>Email: {props.email}</p>
            <p>Telefone: {props.telefone}</p>
            <p>CEP: {props.cep}</p>
            <p>Endereço: {props.endereço}</p>
            <p>Complemento: {props.complemento}</p>
            <p>Data de Nascimento: {props.data}</p>
            <p>CPF: {props.cpf}</p>
            <p>Renda Mensal: {props.renda}</p>
        </div>
    )
}