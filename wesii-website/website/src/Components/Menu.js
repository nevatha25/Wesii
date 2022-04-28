import React, { useEffect } from 'react';
import './Menu.scss'
import '../Components/common.scss'
import logo from '../images/logo.png'
import rete from '../images/rete.png'
import toparrow from '../images/toparrow.png'
const Menu = ({clickEvent}) =>{
    return(
        <div className='first-component' id='menu'>
            <div className='menu-section'>
                <div className='logo-img'>
                    <img src = {logo} onClick={clickEvent} href="https://www.youtube.com/watch?v=xZGclBflBnw" alt='image'/>
                </div>
                <div className='menu-center-section' id='start'>
                    <div>
                       <h6>PRESTO ON CON IL NUOVO PORTALE<span className='top-arrow'><img src={toparrow} alt="top-arrow"/></span>SCOPRI DI PIU <span className='fifty-percent'>50%</span></h6>
                    </div>
                    <div className='right'></div>
                </div>
                <div className='menu-button'>
                    <button id='top'>PARLA CON UN ESPERTO</button>
                </div>
            </div>
        </div>
    )
}


export default Menu;
