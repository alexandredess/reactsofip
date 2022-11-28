import React, { useContext } from 'react';
import {themeContext} from '../../Context/theme-context';

function AjoutEleve (props){

    const theme = useContext(themeContext);
    
        //JSX
        return(
            <div>
                <div className="text-center">
                    <h3>Ajouter un élève</h3>
                </div>
                <div className="flex">
                    <input type="text"  
                        style={{
                        width:'50%',
                        background:theme.background,
                        color:theme.foreground
                        }}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mt-3 ">Ajouter</button>
                </div>                
                
            </div>
        )
}

export default AjoutEleve;