import CustomButton from '../Share/CustomButton/CustomButton';
import './HeroSection.css';

function HeroSection() {

    return (
        <section className="hero">
            <div className='title'>
                <h2 className='title-firstLine'>
                    We Change Everything WordPress
                </h2>

                <h2 className='title-SecondLine'>
                    This is the only WordPress theme you will ever want to use.
                </h2>
                <div className='Hero-Button-Section'>
                    <CustomButton text="Read More" buttonStyle="Fill-style" />
                    <CustomButton text="Download Now" buttonStyle="Outline-style" />
                </div>
            </div>
        </section>
    )
}


export default HeroSection

