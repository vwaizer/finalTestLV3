import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    flex-direction:row;
    border:2px solid black;
    color:red;
`;

const ChangeLanguage = (props) => {
    
  return (
    <>
    <Container >
         <FaCheckCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => {
                props.method(!props.value)
            }}
          />
            {props.value === true ? "Eng":"Vie"}
          
    </Container>
    </>

  )
}

export default ChangeLanguage