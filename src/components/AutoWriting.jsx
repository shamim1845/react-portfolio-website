import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import Typed from "typed.js";

const AutoWriting = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        ' Some are slanted',
        ' Some  are bold',
        ' HTML characters &times; &copy;'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (

 <Container>
      <span className="code_wrap"><BsChevronLeft /><span className="code">code</span>  <BsChevronRight /></span> 

  I build    <span className="auto_writing" ref={el} />

  <span className="code_wrap"><BsChevronLeft /> <span className="code">/code</span>  <BsChevronRight /></span> 
 </Container>
      
  
  );
}


export default AutoWriting;
const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-size: 1.6rem;
.code_wrap{
    display: flex;
    justify-content: center;
    align-items: center;

    .code{
           color: #ffc107;
    }
}

.auto_writing{
    padding-left: .2rem;
    font-size: 1.6rem;
}
   
`