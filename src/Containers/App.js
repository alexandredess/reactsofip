import './App.css';
import Eleve from '../Components/Eleves/Eleve';
import React,{useState} from 'react';

function App(){

  //State 
  const [eleves]= useState(

    {
      nom:'Eva Dupont',
      moyenne:15,
      citation:"Aller toujours plus loin"
    },
    {nom:'Pascal Obispo',
     moyenne:5,
     citation:"Le feu ça brûle"
    }
  );

    //Methodes
    const buttonClickedHandler= nouveauNom=>{
      // const nouveauState =[...this.state.eleves];
      // nouveauState[0].nom=nouveauNom
      // this.setState({
      //   ...this.state,
      //   eleves:nouveauState
    }

    return(
      <div className='app'>
        <div>
          <h1>Bienvenue dans la classe Terre</h1>
        </div>
        <div>
          
          {/* <button onClick={buttonClickedHandler.bind(this,"Elon Musk")}>Transformer le premier Eleve</button> */}
        </div>
        

        <Eleve
          nom={eleves[0].nom}
          moyenne={eleves[0].moyenne}
          clic={() => buttonClickedHandler('Julie Martin')}
        >
        {eleves[0].citation}
      </Eleve>

      <Eleve
        nom={eleves[1].nom}
        moyenne={eleves[1].moyenne}
        clic={() => buttonClickedHandler('Thomas Dutronc')}
      >
        {eleves[1].citation}
      </Eleve>
      </div>
    )

}

//   constructor(props){
//     super(props);
//     console.log('[App.JS] Constructor');
//   }


    
//     //cycle de vie
//     // Monté 
//     componentDidMount(){
//       console.log('[App.Js] ComponentDidMount');
//     }
//     //démonté -> lorsque le composant sera retiré (par exemple suppression d'un élève)
//     componentWillUnmount(){
//       console.log('[App.js] ComponentWillUnmount');
//     }

//     //Modifié -> transformer (comme la modif du state )
//     componentDidUpdate(){
//     console.log('[App.js] ComponentDidUpdate');
//   }
  

//     
    


//   }



// }

export default App;
