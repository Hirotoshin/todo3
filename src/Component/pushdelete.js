import React from 'react';
import {pushDelete} from '../Action/actions';
import {connect} from 'react-redux';

class PushDelete extends React.Component{
    constructor(props){
        super(props);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    onClickDelete(index){
        this.props.deletetodo(index);
    }

    render(){
        return(
          <div>
            <input type={"button"} value = "x" onClick={this.onClickDelete}/>
          </div>
        );
    }
}

//何かを受けとりたいときに使う関数
//state.〜でdispatchによって作られたstateを受け取る
function mapStateToProps(state) {
    return{
        todo:state.todo
    }
}

//何かを送りたい時に宣言する関数
//ここで渡す値はthis.propsでアクセス可能(今回はprefecture_add)
function mapDispatchToProps(dispatch) {
    return{
        deletetodo:(index) =>dispatch(pushDelete(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PushDelete);