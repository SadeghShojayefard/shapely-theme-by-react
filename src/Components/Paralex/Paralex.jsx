import CustomButton from '../Share/CustomButton/CustomButton';
import './Paralex.css';

function Paralex() {
    return (
        <section className="paralex-style">
            <div className='paralex-title'>
                <h2 className='paralex-title-firstLine'>
                    Small Parallax Section
                </h2>
                <p className='paralex-title-SecondLine'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
                    Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.
                </p>
                <div className='paralex-Button-Section'>
                    <CustomButton text="Read More" buttonStyle="Fill-style" />
                </div>
            </div>
        </section>
    )
}

export default Paralex;
