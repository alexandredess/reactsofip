import React, {Component} from 'react';

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
                padding: '3px'
            }}
                />
        )
    }
}

export default Search;