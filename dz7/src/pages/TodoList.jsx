import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addTodo, asyncDeleteTodo, fetchTodos, completeTodo } from '../store/todosSlice'

const TodoList = () => {
    const { items, loading, error } = useSelector(state => state.todos)
    const [ val, setVal ] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const buttonClick = () => {
        dispatch(addTodo(val))
    }

    const onKey = (event) => {
        if (event.key === 'Enter' && val.trim() !== ''){
            dispatch(addTodo(val))
            setVal('')
        }
    }

    if (error !== '') return <h2>ERROR{error}</h2>
    if (loading ) return <div className='loading'>Loading</div>

    console.log(items)

    return   (
        <div className={'wrapper'}>
            <h1>TodoList</h1>
            <input
                onKeyPress={onKey}
                type="text"
                placeholder="Add New todo..."
                value={val}
                onChange={(event) => setVal(event.target.value)}
            />
            <button className={'addTodo'} onClick={buttonClick}>Add Todos</button>

            {items && <> {items.map(item =>
                <div className={'todoCard'} key={item.id} style={{background: item.completed ? '#8eff7f' : 'transparent' }}>
                    <p className={'todoTitle'}>
                        {item.todo}
                    </p>
                    <div className={'todoBtns'}>
                        <button className={'deleteTodo'}
                                onClick={() => dispatch(asyncDeleteTodo(item.id))}>&#10539;
                        </button>
                        <button className={'completeTodo'}
                                onClick={() => dispatch(completeTodo(item.id))}>&#10004;
                        </button>
                    </div>
                </div>)}
            </>}
        </div>
    )
}
export default TodoList





















// import { addTodo, removeTodo, completeTodo, fetchTodos } from '../store/todosSlice.jsx'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'
//
// export default function TodoList() {
//     const { items, loading, error } = useSelector(state => state.todos)
//     const [ val, setVal ] = useState('')
//     const dispatch = useDispatch()
//
//     console.log(items)
//
//     useEffect(() => {
//         dispatch(fetchTodos)
//     }, [dispatch])
//
//     const btnClick = () => {
//         if (val.trim() !== '') {
//             dispatch(addTodo(val))
//             setVal('')
//         }
//     }
//
//     const onKey = (event) => {
//         if (event.key === 'Enter' && val.trim() !== ''){
//             dispatch(addTodo(val))
//             setVal('')
//         }
//     }
//
//     if (error !== '') return <h2>ERROR{error}</h2>
//     if (loading ) return <div className='loading'>loading</div>
//
//     return (
//         <div className={'wrapper'}>
//             <h1>TodoList</h1>
//             <input
//                 onKeyPress={onKey}
//                 type="text"
//                 placeholder="Add New todo..."
//                 value={val}
//                 onChange={(event) => setVal(event.target.value)}
//             />
//             <button className={'addTodo'} onClick={btnClick}>Add Todos</button>
//
//             {items && <> {items.map(item =>
//                 <div className={'todoCard'} key={item.id} style={{background: item.completed ? '#8eff7f' : 'transparent' }}>
//                     <p className={'todoTitle'}>
//                         {item.todo}
//                     </p>
//                     <div className={'todoBtns'}>
//                         <button className={'deleteTodo'}
//                                 onClick={() => dispatch(removeTodo(item.id))}>&#10539;
//                         </button>
//                         <button className={'completeTodo'}
//                                 onClick={() => dispatch(completeTodo(item.id))}>&#10004;
//                         </button>
//                     </div>
//                 </div>)}
//             </>}
//         </div>
//     )
// }