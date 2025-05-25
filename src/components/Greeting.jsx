import { Fragment } from "react";

function Greeting(props) {
    return (
    <>
        <h1> Hello, {props.name} {props.surname}!</h1>
        <h2>This line was never there</h2>
    
    </>
    );
}

export default Greeting;