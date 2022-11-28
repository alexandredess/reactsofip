import React, { useContext } from 'react';
import {themeContext} from '../../Context/theme-context';
//import formik
import { withFormik } from 'formik';
//import yup
import * as Yup from 'yup';

function AjoutEleve (props){

    const theme = useContext(themeContext);
    
        //JSX
        return(
            <div className="text-center">
                <div className="text-center">
                    <h3>Ajouter un élève</h3>
                </div>
                <div className="row mt-3">
                    <label htmlFor="nom" className="form-label text-center">Nom</label>
                </div>
                <div className="row flex">
                    <input type="text" className="form-control" id="nom" aria-describedby='nomHelp'
                    name="nom"  
                        style={{
                        width:'50%',
                        background:theme.background,
                        color:theme.foreground
                        }}
                        onChange={props.handleChange}
                        value={props.values.nom}
                        />
                        {props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>}
                </div>
                <div className="row mt-3">
                    <label htmlFor="moyenne" className="form-label text-center">Moyenne</label>
                </div>
                <div className="row flex">
                    <input type="text" className="form-control" id="moyenne" aria-describedby='moyenneHelp'
                    name="moyenne" 
                        style={{
                        width:'50%',
                        background:theme.background,
                        color:theme.foreground
                        }}
                        onChange={props.handleChange}
                        value={props.values.moyenne}
                        />
                        {props.errors.moyenne && <span style={{color:"red"}}>{props.errors.moyenne}</span>}
                </div>
                <div className="row mt-3">
                    <label htmlFor="idProf" className="form-label text-center">Identifiant Professeur</label>
                </div>
                <div className="row flex">
                    <input type="text" className="form-control" id="idProf" aria-describedby='idProfHelp'
                    name="idProf" 
                        style={{
                        width:'50%',
                        background:theme.background,
                        color:theme.foreground
                        }}
                        onChange={props.handleChange}
                        value={props.values.idProf}
                        />
                        {props.errors.idProf && <span style={{color:"red"}}>{props.errors.idProf}</span>}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mt-3 " onClick={props.handleSubmit}>Ajouter</button>
                </div>                
                
            </div>
        )
}

export default withFormik({
    mapPropsToValues:()=>({
        nom:"",
        moyenne:"",
        idProf:""
    }),
    validationSchema:Yup.object().shape({
        nom:Yup.string()
        .min(5,'Votre nom doit avoir plus de 5 caractères')
        .required("Le nom est obligatoire !!!!"),
        moyenne:Yup.string()
        .min(2,"La moyenne doit avoir au minimum deux caractères")
        .required("La moyenne est obligatoire"),
        idProf:Yup.string()
        .min(1,"Votre message doit comporter au minimum 1 caractère !!!!")
        .required("L'id du professeurest obligatoire")
    }),
    handleSubmit:(values)=>{
        alert('Elève ajouté');
    }
}) (AjoutEleve);