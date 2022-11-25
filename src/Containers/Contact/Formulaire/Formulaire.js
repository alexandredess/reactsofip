import React from 'react';
import './Formulaire.css';
//import formik
import { withFormik } from 'formik';
//import yup
import * as Yup from 'yup';

const Formulaire =(props)=>(

    <>
        
        <div className="flex">
            <form>
                <div className="mb-3 form-group">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" aria-describedby='nomHelp'
                    name="nom"
                    onChange={props.handleChange}
                    value={props.values.nom}   
                     />
                     {props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>}
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="mail" className="form-label">Adresse mail</label>
                    <input type="email" className="form-control" id="email" aria-describedby='mailHelp'
                     name="email"
                     onChange={props.handleChange}
                     value={props.values.email}   
                    />
                    {props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>}
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" aria-label='With textarea' rows="3"
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}   
                    >
                    </textarea>
                                        {props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>}

                </div>
                <div>
                    <button type="submit" onClick={props.handleSubmit} className="btn btn-primary">Valider</button>
                </div>
            </form>
        </div>
        
            
        
    </>

);

export default withFormik({
    mapPropsToValues:()=>({
        nom:"",
        email:"",
        message:""
    }),
    validationSchema:Yup.object().shape({
        nom:Yup.string()
        .min(5,'Votre nom doit avoir plus de 5 caractères')
        .required("Le nom est obligatoire !!!!"),
        email:Yup.string()
        .min(5,"L'adresse mail doit avoir plus de 5 caractères")
        .email("Veuillez entrer une adresse mail valide")
        .required("L'adresse mail est obligatoire"),
        message:Yup.string()
        .min(10,"Votre message doit comporter au minimum 10 caractères !!!!")
        .max(500,"le message doit faire mois de 500 caractères")
        .required("Le message est obligatoire")
    }),
    handleSubmit:(values)=>{
        alert('Message envoyé');
    }
}) (Formulaire);