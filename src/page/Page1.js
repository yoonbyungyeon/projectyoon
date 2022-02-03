import React, { useState} from 'react';

const Page1 = () => {
    const [number1, setNumber1] = useState(1)
    const [number2, setNumber2] = useState(1)
    const [number3, setNumber3] = useState()
    const [number4, setNumber4] = useState()


    const onClickBtn = (number, type) => {
        if (number === "number1") {
            if (type === "plus") {
                setNumber1(prev => prev +1)
            } else {
                setNumber1(prev => prev -1)
            }
        } else {
            if (type === "plus") {
                setNumber2(prev => prev +1)
            } else {
                setNumber2(prev => prev -1)
            }
        }
    }  

    const resetBtn = (tomato) => {
        if (tomato === "number1") {
            setNumber1(1)
        } else {
            setNumber2(1)
        }
    }

    const calculBtn = (apple) => {
        if (apple === "number1") {
            setNumber3(number1+number2)
        } else {
            setNumber4(number1-number2)
        }
    }


    return ( <div>
        <div>number1: {number1}</div>
        <button onClick={() => onClickBtn("number1", "plus")}>+</button>
        <button onClick={() => onClickBtn("number1", "minus")}>-</button>
        <button onClick={() => resetBtn("number1")}>reset</button>
        <div>number2: {number2}</div>
        <button onClick={() => onClickBtn("number2", "plus")}>+</button>
        <button onClick={() => onClickBtn("number2", "minus")}>-</button>
        <button onClick={() => resetBtn("number2")}>reset</button>
        <br/>
        <button onClick={() => calculBtn("number1")}>더하기</button>
        <div>더하기 결과: {number3}</div>
        <button onClick={() => calculBtn("number2")}>빼기</button>
        <div>빼기 결과: {number4}</div>
    </div> );
}
 
export default Page1;