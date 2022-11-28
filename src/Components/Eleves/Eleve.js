//librairies
import React, {useEffect, useContext} from 'react';
//import CSS
import classes from './Eleve.module.css';
import {themeContext} from '../../Context/theme-context';

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

    //limitateur
    useEffect(()=>{
        console.log('[Eleve.js] le nom a été modifié');
    },[props.nom])

    //constantes
    const moyenneClasses=[];
    const theme= useContext(themeContext);
    let inputBackground;

    if(props.moyenne>10){
        moyenneClasses.push(classes.green)
    }else if(props.moyenne === 10){
        moyenneClasses.push(classes.orange)
    }else{
        moyenneClasses.push(classes.red)
    }
        
    let message;
    if(props.moyenne<6){
        message=<p>Cet élève va redoubler</p>
    }

    
    //JSX
    return(
        <div background={inputBackground} className={classes.eleve}>
            <h3 onClick={props.clic}>{props.nom}</h3>
            <p>Moyenne scolaire : <b className={moyenneClasses.join(' ')}>{props.moyenne}/20</b></p>
            <p>Age:{Math.floor(Math.random()*100)}</p>
            <i>{props.citation}</i>
            {message}
            <input ref={props.maRef}  type="text" defaultValue={props.nom} 
            style={{
                width:'100%',
                background:theme.background,
                color:theme.foreground
                }}/>
            <button onClick={props.supprimer} style={{marginTop:'5px'}}>Supprimer</button>
            <button onClick={props.changerNom} onChange={props.changerNom} style={{marginTop:'5px'}}>Modifier</button>
        </div>
    )

}
export default Eleve;
