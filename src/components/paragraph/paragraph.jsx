import PropTypes from 'prop-types'

export const Paragraph = ({text, textColor}) => {
    return(
        <p style={{ color: textColor, textTransform:'uppercase' }}>{text}</p>
    )
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}   