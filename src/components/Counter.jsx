import { useState } from "react";

function Counter() {
    const [count, setcount] = useState(0)
    

    return (
        <div style= {{backgroundColor:"yellow" , padding:"20px"}}>
            <h2 style= {{color:"red"}}>Count: {count}</h2>
            <button onClick={()=> setcount(count + 1)}>Increase</button>
            <button onClick={()=> setcount(count -1)}>Decrease</button>
        </div>
    );
}

export default Counter