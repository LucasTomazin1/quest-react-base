import PropTypes from 'prop-types'

const showLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

export const Button = ({label}) => {
    return(
        <button 
        onClick={() => showLabel(label)} >{label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired
}