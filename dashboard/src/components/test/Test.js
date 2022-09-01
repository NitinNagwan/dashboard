import React, { useState } from 'react'
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let counter= []
function Test() {

    const [count,setCount] = useState(0)


    const handleSub = (e) =>{
        // count--
        setCount(count-1);
        // counter.pop(count)
        counter.pop()

    }
    
    console.log(count)
    const handleadd = (e) =>{
        // count--
        let c = count
        setCount( count + 1 );
        counter =  [...counter, count]
       
        // console.log(count)
    }

    console.log(counter)
  return (
    <div>
        <input type='text' value={count}/>
        <button type="button" onClick={e => handleSub(e)}>-</button>
        <button type="button" onClick={e => handleadd(e)}>+</button>
        {counter && counter.map(item =>{
            return <div>{alphabet[item]}</div>
        } )}

    </div>
  )
}

export default Test