//action
export const PUSH_ADD = 'push_add';
export const PUSH_DELETE = 'push_delete';
export const PUSH_DONE = 'push_done';

//actionCreater
export function pushAdd(text) {
    return{
        type:PUSH_ADD,
        text
    }
}

export function pushDelete(index) {
    return{
        type:PUSH_DELETE,
        index
    }
}

export function pushDone(index) {
    return{
        type:PUSH_DONE,
        index
    }
}