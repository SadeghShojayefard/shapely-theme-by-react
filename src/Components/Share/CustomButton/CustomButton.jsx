import './CustomButton.css';
import PropTypes from 'prop-types';

function CustomButton({ text, buttonStyle }) {
    return (
        <a href="#" className={`Custom-button-style ${buttonStyle}`}>{text}</a>
    )
}

CustomButton.propTypes = {
    buttonStyle: PropTypes.oneOf(['Fill-style', 'Outline-style'])
}

export default CustomButton;