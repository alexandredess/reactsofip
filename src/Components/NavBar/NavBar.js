import React, { Component } from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';


class NavBar extends Component{
    render(){
        return(
            <div>
                <ul className="flex" >
                    <li className='listStyle'>
                        <NavLink to={"/"}>Accueil</NavLink>
                    </li>
                    <li className='listStyle'>
                        <NavLink to={"/ecole"}>Ecole</NavLink>
                    </li>
                    <li className='listStyle'>
                        <NavLink to={"/contact"}>Contactez-nous</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
