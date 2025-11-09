function Clicker() {
  const handleClick = () => {
    alert("you clicked the button!");
  
}
return (
<button 
onClick={handleClick} 
style= {{backgroundColor:"red"}}>Click

</button>
);

}



export default Clicker;