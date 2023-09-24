// Code Keypad Component Here

        
export default function Keypad (){
    
handleInputChange = () => { console.log('Entering password...');};

      
    return (
        <div> <input type="password" onChange={handleInputChange} /> </div>
    )
}
