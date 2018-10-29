import {PUSH_ADD,PUSH_DELETE,PUSH_DONE} from "./Action/actions";

//todoのリストをもつ配列
const initialState = {
    todo:[]
}

export function reducer(state=initialState,action) {
    let _state = JSON.parse(JSON.stringify(state))

    switch (action.type){
        case PUSH_ADD:
            _state.todo.push({
                text:action.text
            });
            return _state;

        case PUSH_DELETE:
            _state.todo.splice(action.index);
            return _state;

        case PUSH_DONE:
            return _state;

        default:
            return _state;
    }
}