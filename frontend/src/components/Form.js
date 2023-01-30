import React, { useEffect, useRef } from "react"
import styled from "styled-components";
import { FormContainer } from "../styles/FormContainer"
import { InputArea } from "../styles/inputArea";
import axios from "axios";
import { toast } from "react-toastify";



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





const Form = ({onEdit, setOnEdit, getUsers})=>{
    const ref = useRef();

    useEffect(() => {
        if(onEdit){
            const user = ref.current;
            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.contato.value = onEdit.contato;
            user.data_nascimento.value = onEdit.data_nascimento;
        }
       
    }, [onEdit]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const user = ref.current;

        if (!user.nome.value || !user.email.value|| !user.contato.value|| !user.data_nascimento.value){

            return toast.warn("Preencha todos os campos!")
        }
       
        if(onEdit){
            await axios
        .put("http://localhost:8000/" + onEdit.id, {
          nome: user.name.value,
          email: user.email.value,
          contato: user.contato.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8000", {
          nome: user.nome.value,
          email: user.email.value,
          contato: user.contato.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

        user.nome.value = "";
        user.email.value = "";
        user.contato.value = "";
        user.data_nascimento.value = "";

        setOnEdit(null);
        getUsers();
    }


    return(
       <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label htmlFor="nome">Nome</Label>
                <Input type="text" id="name" name="nome" />
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