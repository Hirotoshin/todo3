import React from 'react';
import {connect} from 'react-redux';
import PushAddButton from './Component/pushAdd';

class Conttainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>TodoApp3</h1>
                <PushAddButton/>

            </div>
        )
    }
}

function mapStateToProps() {
    return{

    }
}

function mapDispatchToProps() {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Conttainer);