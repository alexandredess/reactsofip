//librairies
import React, {useEffect} from 'react';
//import CSS
import './Eleve.css';

function Eleve(props) {
    //useEffects
    useEffect(() => {
        console.log('[Eleve.js] UseEffect');
    }, []);

    useEffect(() => {
        console.log('[Eleve.js] UseEffect(didUpdate');
    })

    useEffect(() => {
        return () => {
            console.log('[Eleve.js] UseEffect(WillUnmount)');
        }
    }, []);

    //JSX
    return(
        <div className='eleve' onClick={props.clic}>
            <h3 >{props.nom}</h3>
            <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
            <p>Age:{Math.floor(Math.random()*100)}</p>
            <i>{props.citation}</i>
        </div>
    )

}
export default Eleve;
