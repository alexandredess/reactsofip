import React, {Component} from 'react';
import {themeContext} from '../../Context/theme-context';

class Search extends Component{


    //Création de l'étiquette (ref)
    constructor(props){
        super(props);
        this.searchRef = React.createRef();
    }

    //didMount
    componentDidMount(){
        this.searchRef.focus();
    }

    //context

    static contextType = themeContext;

    //JSX
    render(){
        return(
            <input 
            type="text"
            ref={(e)=>this.searchRef=e} 
            style={{
                width:'90%',
                display: 'block',
                margin: 'auto',
                padding: '3px',
                background: this.context.background,
                color: this.context.foreground
            }}
                />
        )
    }
}

export default Search;