export default function EyesOnMe() {
   
    const handleInputFocus = () => { console.log('Good!'); };
  
    const handleInputBlur = () => { console.log('Hey! Eyes on me!'); };
  
    return ( <button onFocus={handleInputFocus} onBlur={handleInputBlur}> Eyes on me </button> );
  }
