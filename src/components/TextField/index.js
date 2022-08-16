import './CampoTexto.css';

const CampoTexto = (props) => {
    //funcao para quando digitar alterar estado
    const whenDigited = (event) => {
        //propriedade para receber alteracao do valor
        props.whenChanged(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenDigited} required={props.required} placeholder={`${props.placeholder}...`}/>
        </div>
    )

}

export default CampoTexto;