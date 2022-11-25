import React, { Component } from 'react';
import './Contact.css';
import Formulaire from './Formulaire/Formulaire';

class Contact extends Component{
    render(){
        return(
            <div>
                <div>
                    <h3>Formulaire de contact</h3>
                </div>

                <div>
                    <Formulaire/>
                </div>
            </div>
        )
    }
}

export default Contact;