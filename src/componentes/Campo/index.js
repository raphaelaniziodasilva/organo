import './campo.css'

const Campo = ({label, type = 'text', obrigatorio, valor, placeholder, aoAlterado = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>

            <input
                type={type}
                required={obrigatorio}
                value={valor}
                placeholder={placeholder}
                onChange={evento => aoAlterado(evento.target.value)}
            /> 
        </div>
    )
}

export default Campo