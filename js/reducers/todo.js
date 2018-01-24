// 這兩個參數都是redux給你的
// state是這個reducer上一次的狀態
import {TodoEvents} from "../constants/Events";

const todo = (state ={
    list: [] // 預設的初始狀態(空的)

}, action) => {
    switch (action.type) {
        case TodoEvents.GET_TODOS:
            return {list: action.todos};
        case TodoEvents.ADD_TODOS:
            return {list: [...state.list, action.todo]}; // 前面是把state.list(array)中的元素給取出, 最後再加一筆action.todo
        case TodoEvents.DEL_TODOS:
            return {list: [...state.list.filter(a=> a.id != action.delId)]}; // 過濾掉被刪除的
        default:
            return state;                                // 不是此reducer關注的事件所以回傳完整的state
    }
};


export default todo;