//librairies
import React, { Component } from 'react';
//import CSS
import './Eleve.css';


class Eleve extends Component{

    //constructor
    constructor(props){
        super(props);
        console.log('[Eleve.JS] Constructor');
      }

    //cycle de vie
    componentDidMount(){
        console.log('[Eleve.JS] ComponentDidMount');
    }

    componentWillUnmount(){
        console.log('[Eleve.JS] ComponentWillUnmount');
    }

    //Modifié -> transformer (comme la modif du state )
    componentDidUpdate(){
    console.log('[Eleve.js] ComponentDidupdate');
    }

    shouldComponentUpdate(nextProps){
    console.log('[Eleve.js] shouldComponentUpdate'); 
    
    // si la prochaine valeur de nom est différente de la valeur du nom actuelle
    if(nextProps.nom !== this.props.nom){
        return true;
    }
        return false;
    }
        
    

    render(){
        return(
            <div className='eleve' onClick={this.props.clic}>
                <h3 >{this.props.nom}</h3>
                <p>Moyenne scolaire : <b>{this.props.moyenne}/20</b></p>
                <p>Age:{Math.floor(Math.random()*100)}</p>
                <i>{this.props.citation}</i>
            </div>
        )
    }
}


export default Eleve;