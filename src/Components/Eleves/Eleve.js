//librairies
import React, {useEffect} from 'react';
//import CSS
import classes from './Eleve.module.css';

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
        <div className={classes.eleve}>
            <h3 onClick={props.clic}>{props.nom}</h3>
            <p>Moyenne scolaire : <b className={moyenneClasses.join(' ')}>{props.moyenne}/20</b></p>
            <p>Age:{Math.floor(Math.random()*100)}</p>
            <i>{props.citation}</i>
            {message}
            <input onChange={props.changerNom} type="text" value={props.nom} style={{width:'100%'}}/>
            <button onClick={props.supprimer} style={{marginTop:'5px'}}>Supprimer</button>
        </div>
    )

}
export default Eleve;
