import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label> {props.label} </label>
            {/*receber valor via propriedades e quando alterado */}
            <select onChange={event => props.whenChanged(event.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;