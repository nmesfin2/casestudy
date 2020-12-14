import React, { useState, useEffect } from 'react'


const Sample = () => {
    
    const [counter, setCount] = useState(0)
    // componentdidmount ===> init
    // componentdidupdate ====> after initialization, if anything is change 
    // can be handled by useEffect ()
    useEffect(() => {
        document.title = `you clicked ${counter} times`   
    })


    return (
        <div>
           <p> You clicked {counter}</p>
           <button onClick={()=>setCount(counter+1)}>Click Me</button> 
        </div>
    )
}

export default Sample
