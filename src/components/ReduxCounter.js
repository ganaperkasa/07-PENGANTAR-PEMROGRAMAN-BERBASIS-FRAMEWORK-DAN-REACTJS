'use client'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "@/features/counter/counterSlice"

export default function ReduxCounter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Redux Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
