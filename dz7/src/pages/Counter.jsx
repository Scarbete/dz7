import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../store/counterSlice.jsx'
import { useState } from 'react'
import 'src/App.css'

export default function Counter() {
    const [val, setVal] = useState(1)
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter.value)

    const plus = () => {
        dispatch(increase(val))
    }

    return (
        <div>
            <input type="number" onChange={e => setVal(Number(e.target.value))} value={val}/>
            <button onClick={plus}>+</button>
            {counter}
            {/*<button onClick={}>-</button>*/}
        </div>
    )
}