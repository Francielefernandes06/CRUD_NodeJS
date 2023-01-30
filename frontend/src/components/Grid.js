import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FaTrash, FaEdit } from 'react-icons/fa';
// import moment from 'moment';
import { toast } from 'react-toastify';


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    max-width: 800px;
    margin: 20px auto;
    work-break: break-all;
`;

export const Thead = styled.thead`

`;

export const Tbody = styled.tbody`

`;

export const Tr = styled.tr`

`;

export const Th = styled.th`

`;

export const Td = styled.td`
    padding-top: 15px;


`;

const Grid = ({users, setUsers, setOnEdit}) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) =>{
        await axios
        .delete(`http://localhost:8000/${id}`)
        .then(({response})=>{
            const novoArray = users.filter((user) => user.id !== id)

            setUsers(novoArray)

            toast.success("Usuário deletado com sucesso")
        })
        .catch((error)=>{
            toast.error("Erro ao deletar usuário")
        })

        setOnEdit(null);

    }
    
    

  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>Telefone</Th>
                <Th>Data de Nascimento</Th>
                <Th>Ações</Th>
            </Tr>
        </Thead>

        <Tbody>
            {users.map((item, i)=>(
              
                
                <Tr key={i}>
                    <Td>{item.nome}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.contato}</Td>
                    <Td>{new Date(item.data_nascimento).toLocaleDateString()}</Td>
                    <Td>
                        <FaEdit onClick={()=> handleEdit(item)} />
                        <FaTrash onClick={()=> handleDelete(item.id)}/>
                    </Td>
                </Tr>
                    
            ))}


        </Tbody>
                
    </Table>
  )
}

export default Grid