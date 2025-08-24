import PropTypes from 'prop-types';
import CustomButton from '../Share/CustomButton/CustomButton';
import './Home.css';

function Home({ orderCol, bgColor, imgAddress, title, text, btnText }) {
    const imageCol =
        <div className='home-col' >
            <img src={imgAddress} />
        </div>

    const textCol =
        <div className='home-col'>
            <p className='Home-title-style'>{title}</p>
            <p className='Home-text-style'>{text}</p>
            <CustomButton text={btnText} buttonStyle="Fill-style" />
        </div>
    return (
        <div className={`Home-continer ${bgColor} `}>
            <div className="home-row">
                {orderCol === 'rtl' ? (
                    <>
                        {imageCol}
                        {textCol}
                    </>
                ) : (
                    <>
                        {textCol}
                        {imageCol}
                    </>
                )}
            </div>
        </div>
    )
}

Home.propTypes = {
    bgColor: PropTypes.oneOf(['bg-white', 'bg-grey']),
    orderCol: PropTypes.oneOf(['rtl', 'ltr']) // rtl = first text part
}

export default Home;