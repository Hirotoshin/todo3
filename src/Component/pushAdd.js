import React from 'react';
import {pushAdd} from '../Action/actions';
import {connect} from 'react-redux'

class PushAddButton extends React.Component{
    constructor(props){
        super(props);
        this.pushAdd = this.pushAdd.bind(this);
    }

    pushAdd(){
        //console.log(this.refs.inputText.value);
        this.props.receiveText(this.refs.inputText.value);
        this.refs.inputText.value = "";
    }

    render(){
        return(
            <div>
                <h1>TodoApp3</h1>
                <input type="text" ref={'inputText'} />
                <input type="button" value="追加" onClick={this.pushAdd}/>
                <ul>
                    {this.props.todo.map((todo,i) => {
                        return <li key={i}>
                                {todo.text}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

//何かを受けとりたいときに使う関数
//state.〜でdispatchによって作られたstateを受け取る
function mapStateToProps(state) {
    return {
        todo: state.todo
    }
}

//何かを送りたい時に宣言する関数
//ここで渡す値はthis.propsでアクセス可能(今回はprefecture_add)
function mapDispatchToProps(dispatch) {
    return{
        receiveText:(text) => dispatch(pushAdd(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PushAddButton);