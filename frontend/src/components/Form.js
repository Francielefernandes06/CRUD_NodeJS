import React, { useRef } from "react"
import styled from "styled-components";
import { FormContainer } from "../styles/FormContainer"
import { InputArea } from "../styles/inputArea";


const Input =styled.input`
    width:120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label`

`;

const Button = styled.button`
    padding:10px;
    border-radius: 5px;
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background-color: #333;
    }
    height: 42px;
`;





const Form = ()=>{
    const ref = useRef();

    return(
       <FormContainer ref={ref}>
            <InputArea>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" />
            </InputArea>
            <InputArea>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" />
            </InputArea>
            <InputArea>
                <Label htmlFor="telefone">Telefone</Label>
                <Input type="text" id="telefone" name="contato" />
            </InputArea>
            <InputArea>
                <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                <Input type="date" id="data_nascimento" name="data_nascimento" />
            </InputArea>

            <Button type="submit">Enviar</Button>
             

       </FormContainer>
    )
}

export default Form