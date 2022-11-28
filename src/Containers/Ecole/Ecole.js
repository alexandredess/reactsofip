import './Ecole.css';
import Eleve from '../../Components/Eleves/Eleve';
import React,{useState, useEffect,useRef, createRef} from 'react';
import styledComponent from 'styled-components';
import Search from '../../Components/Search/Search';
import ThemeContextProvider from '../../Context/theme-context';
import API from "../Api/APIConnect"

const MonBoutonStylise=styledComponent.button`
//on y met le code CSS A l'intérieur
padding : 10px 30px;
background-color : ${props=>props.transformed ? 'green':'black'};
color : white;
cursor:pointer;
margin-bottom:10px;

&:hover{
  background-color:${props=>props.transformed ? 'lightgreen':'white'};
  color:${props=>props.transformed ? 'white':'black'};
}
`;


function Ecole(){

  //State 
  const [eleves,setEleves]= useState([]);

  const [transformation,setTransformation]=useState(false);
  const[afficherEleve,setAfficherEleve]=useState(true);
    //useEffects

    
    useEffect(()=>{
      return()=>{
        console.log('[App.js] UseEffect(willUnmount)');
      }
    },[])

    //Un useEffect on ymet tout le code que l'on veut et il se joue quand le composant est monté
    useEffect(()=>{
      buildEleves();//lance la fonction qui récupère les éléments de notre API
    },[])
    //Methodes
    const buttonClickedHandler = (nouveauNom,index) => {
      const nouveauxEleves = [...eleves];
      nouveauxEleves[index].nom = nouveauNom;
      setEleves(nouveauxEleves);
      setTransformation(true);
      elementInputs[index].current.focus();//pour faire le focus
    }

    const buildEleves=()=>{
      API.get('/eleves').then(res=>{
        setEleves(res.data)
      })
    }
    // const buttonClickedOneHandler= (nouveauNom)=>{
    //   const nouveauxEleves =[...eleves];
    //   nouveauxEleves[0].nom= nouveauNom;
    //   setEleves(nouveauxEleves)
    //   setTransformation(true);
    // }

    const showHideClickHandler=()=>{
      //permet de passer en true et en false comme un toggle
      setAfficherEleve(!afficherEleve)
    }
    //style dynamique
    const h1Style={
      color:'green',
      backgroundColor:'lightgreen'
    }

    const removeClickhandler = id =>{
    API.delete('eleves/'+id).then(()=>{
      buildEleves();
      alert("Elève supprimé !!")
    })
  }
  const elementInputs = useRef([]);
  const nameChangeHandler = (id,index)=>{
    API.put('/eleves/'+id,{
      nom:elementInputs.current[index].current.value
    })
    buildEleves()
  }

   elementInputs.current = eleves.map((eleve,i)=>elementInputs.current[i]?? createRef());

  let cartes = eleves.map((eleve,index)=>{


    return (
        <Eleve
        key={eleve.id}
        nom={eleve.nom}
        moyenne={eleve.moyenne}
        
        clic={() => buttonClickedHandler('Thomas Dutronc',index)}
        supprimer={()=>removeClickhandler(eleve.id)}//on utilise l'id pour la suppression de l'élève et non par l'index du tableau
        changerNom={()=>nameChangeHandler(eleve.id,index)}
        maRef={elementInputs.current[index]}
        >
        {eleve.citation}
      
        </Eleve>
    );
  });

    return(
        <ThemeContextProvider>
          <div className='app'>
            <div>
              <h1 style={h1Style}>Bienvenue dans la classe Terre</h1>
            </div>
            <div>
            
            <MonBoutonStylise transformed={transformation} onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier Eleve</MonBoutonStylise> 
          </div>

          <div>
            
            <MonBoutonStylise  onClick={showHideClickHandler}>Afficher/Masquer</MonBoutonStylise> 
          </div>

          <Search/>
          
          {afficherEleve?
          <div>
            {cartes}
          </div>
          :null
          }
          
          </div>
      </ThemeContextProvider>
      
    )

}

export default Ecole;