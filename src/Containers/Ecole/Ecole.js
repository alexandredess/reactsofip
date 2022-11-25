import './Ecole.css';
import Eleve from '../../Components/Eleves/Eleve';
import React,{useState, useEffect,useRef} from 'react';
import styledComponent from 'styled-components';
import Search from '../../Components/Search/Search';
import ThemeContextProvider from '../../Context/theme-context';

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


function App(){

  //State 
  const [eleves,setEleves]= useState([

    {
      id:1,
      nom:'Eva Dupont',
      moyenne:15,
      citation:"Aller toujours plus loin"
    },
    {
    id:2,
    nom:'Pascal Obispo',
    moyenne:5,
    citation:"Le feu ça brûle"
    }
  ]);

  const [transformation,setTransformation]=useState(false);
  const[afficherEleve,setAfficherEleve]=useState(true);
    //useEffects

    
    useEffect(()=>{
      return()=>{
        console.log('[App.js] UseEffect(willUnmount)');
      }
    },[])

    //Methodes
    const buttonClickedHandler = (nouveauNom,index) => {
      const nouveauxEleves = [...eleves];
      nouveauxEleves[index].nom = nouveauNom;
      setEleves(nouveauxEleves);
      setTransformation(true);
      elementInput.current.focus();
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

    const removeClickhandler = index =>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves.splice(index,1);
    setEleves(nouveauxEleves);
  }

  const nameChangeHandler = (event,index)=>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves[index].nom= event.target.value;
    setEleves(nouveauxEleves)
  }

  const elementInput = useRef(null);

  let cartes = eleves.map((eleve,index)=>{
    let maVariableRef=null
    if(index === 0){
      maVariableRef= elementInput;
    }

    return (
        <Eleve
        key={index}
        nom={eleve.nom}
        moyenne={eleve.moyenne}
        
        clic={() => buttonClickedHandler('Thomas Dutronc',index)}
        supprimer={()=>removeClickhandler(index)}
        changerNom={(e)=>nameChangeHandler(e,index)}
        maRef={maVariableRef}
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

export default App;