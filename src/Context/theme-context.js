import React from 'react';

const themes={
    light:{
        background:"white",//background-color
        foreground:"black"//color
    },
    dark:{
        background:"black",//background-color
        foreground:"white"
    }
}

export const themeContext = React.createContext(themes.light);


//création du provider

const themeContextProvider = props =>{
    return(
        <themeContext.Provider value={themes.dark}>
            {props.children}
        </themeContext.Provider>
    )
}

export default themeContextProvider;