import React from "react";
import mappa from '../images/mappa.png'
import rete from '../images/rete.png'
import reverse from '../images/reverse.png'
import '../Components/Arrivando.scss'
import '../Components/common.scss'
const Arrivando =() =>{
    return(
        <div className="seventh-component">
            <section className="arrivando-section">
                <div className="arrivando-content">
                    <h2>Stiamo <span>arrivando!</span></h2>
                    <p>Abbiamo in programma di volare nell'area geografica che hai selezionato. Lasciaci i tuoi dati per <span>scoprire quando</span> e per avere la possibilità di <span>aggiungerei tuoi impianti </span> al nostro piano di volo.</p>
                    <div className="form">
                        <div className="test">
                            <h6>Name*</h6>
                            <input type="text"  placeholder="Alessandro"/>
                        </div>
                        <div className="test">
                            <h6>Cognome*</h6>
                            <input type="text"  placeholder="Sancassain"/>
                        </div>
                        <div className="test">
                            <h6>E-mail*</h6>
                            <input type="text"  placeholder="ale.sancassain@gmail.com"/>
                        </div>
                        <div className="test">
                            <h6>Telefono*</h6>
                            <input type="text"  placeholder="+39 340 44 55 666"/>
                        </div>
                        <div className="test">
                            <h6>Azienda*</h6>
                            <input type="text"  placeholder="Bluedog"/>
                        </div>
                        <div className="test">
                            <h6>Numero impianti*</h6>
                            <input type="text"  placeholder="50-200"/>
                            <button><i className='bx bx-chevron-down'></i></button>
                        </div>
                    </div>
                    <div  className="checkbox">
                        <input type={"checkbox"} value={'text'}/> Dichiaro di aver letto l'informativa privacy e acconsento al trattamento dei miei dati personali.
                    </div>
                    <div className="arrivando-button">
                        <button>SCOPRI QUANDO</button>
                    </div>
                </div>
                <div className="arrivando-image">
                    <img src={mappa}></img>
                </div>
            <div className="rete-img">
                 <img src ={rete} alt='rete'/>
            </div>
            <div className="rete1-img">
                 <img src={reverse} alt='reverse'/>
            </div>
            </section>
        </div>
    )
}
export default Arrivando