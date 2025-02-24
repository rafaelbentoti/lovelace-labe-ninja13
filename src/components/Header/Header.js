import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import Button from '@material-ui/core/Button';
import  Home  from '../Home/Home'


const GlobalStyle = createGlobalStyle `
* { 
padding: 0;
margin: 0;
box-sizing: border-box;
}
` 
const Container =styled.div`
display:flex;
border:1px solid black;
background-color:lightgray;
padding:10px;
justify-content:space-between;
`
const ButtonContainer=styled.div`
display: flex;
justify-content: space-between;

button{
    margin-right:20px;
}

`

export default class Header extends React.Component {
    render(){
        return(
        <Container>
            <GlobalStyle/>
       <h1>LabeNinjas</h1>

        <ButtonContainer>
       <Button variant="contained" color="primary" onClick={() => this.props.trocarTela("home")}>
      Home
    </Button>

    <Button variant="contained" color="primary" onClick={() => this.props.trocarTela("carrinho")}>
      Carrinho
    </Button>

    </ButtonContainer>
    
      
        </Container>
    ) 
    }
   
}
