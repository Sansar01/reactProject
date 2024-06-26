import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // todos: [{
    //     id: 1,
    //     todo: "Todos msg",
    //     completed: false
    // }],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider;


// export const TryProvider = ()=>{
//     <TodoContext.Provider value={{addTodo}}></TodoContext.Provider>
// }