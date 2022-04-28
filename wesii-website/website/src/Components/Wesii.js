import React, { useEffect } from "react";
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";
import './Wesii.scss';
import '../Components/common.scss'
import wesii from '../images/wesii.png'
import anni from '../images/anni.png'
const Wesii = ()=>{
    useEffect(()=>{
        Aos.init({ duration: 1000 });
    }, [])
    return(
        <div className="fourth-component">
            <div className="wesii-section">
                <div className="wesii-content">
                    <h2>Chi è <span>Wesii</span></h2>
                    <p>Wesii è una start-up italiana fondata nel 2016 operante in tutto il mondo attraverso <span>numerose partnership</span>. Con oltre dieci anni di esperienza nelle attività di telerilevamento, Wesii fornisce servizi di <span>ispezione multispettrale all'avanguardia</span> per un'ampia varietà di aziende. Le applicazioni spaziano dagli impianti solari al monitoraggio dei siti di discarica, dall'agricoltura al navale e persino allo sport.</p>
                </div>
                <div className="count-section">
                    <div data-aos="fade-down" data-aos-easing="linear" className="count counts">
                        <h2>10</h2>
                        <p>ANNI <br/>DI ESPERIENZA</p>
                    </div>
                    <div data-aos="fade-up" data-aos-easing="linear" className="count border">
                        <h2>+300</h2>
                        <p>AZIENDE<br/> CLIENTI</p>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" className="count third-count">
                        <h2>+8.000</h2>
                        <p>ISPEZIONI <br/>ALL'ANNO</p>
                    </div>
                </div>
            </div>
            <div className="anni-image">
                <img src={anni} alt='background'/>
            </div>
        </div>
    )
}
export default Wesii