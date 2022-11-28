import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import Ecole from '../Ecole/Ecole';
import NavBar from '../../Components/NavBar/NavBar';
import Contact from '../../Containers/Contact/Contact';
import AjoutEleve from '../AjoutEleves/FormulaireAjout';

class Router extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/ecole" element={<Ecole/>}/>
                    <Route path="/ajouteleve" element={<AjoutEleve/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        )
    }
}

export default Router;