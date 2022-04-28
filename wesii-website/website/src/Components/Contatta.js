import React from 'react'
// import { Link } from 'react-scroll/modules'
import last from '../images/last.png'
import '../Components/Contatta.scss'
import '../Components/common.scss'
import Banner from './Banner'
import footer from '../images/footer.png'
import Menu from '../Components/Menu.js'
import scrollarrow from '../images/scollarrow.png'
const Contatta =()=>{
    return(
        <div className="fifth-component">
            <section className="contatto-section">
                <div className="contatto-image">
                    <img src={last} alt='last-img'></img>
                </div>
                <div className="contatto-content">
                    <h2 >Contatta un nostro <span>esperto</span></h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisci elit,sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                    <div className="form">
                        <input type="text"  placeholder="Name*"/>
                        <input type="text"  placeholder="Congname*"/>
                        <input type="text"  placeholder="E-mail*"/>
                        <input type="text"  placeholder="Telefono*"/>
                    </div>
                    <div className="checkbox">
                        <input type={"checkbox"} value={'text'}/> Dichiaro di aver letto l'informativa privacy e acconsento al trattamento dei miei dati personali.
                    </div>
                    <button>VOGLIO ESSERE RICONTATTATO</button>
                </div>
            </section>
            <div className="footer-back-image">
                <img src={footer} alt='footer'/>
            </div>
            <div className="arrow">
            <a href='#top'><img src={scrollarrow}/></a>
            </div>
        </div>
    )
}
export default Contatta