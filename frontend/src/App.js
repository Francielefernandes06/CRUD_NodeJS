import GlobalStyle from "./styles/global";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios";


import { Container } from "./styles/container";
import { Title } from "./styles/title";
import Form from "./components/Form";
import Grid from "./components/Grid";

function App() {
  const [users, setUsers] = useState([]);
  //const [onEdit, setOnEdit]= useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000");
      setUsers(response.data);
    }
    catch (error) {
      toast.error("Erro ao carregar os usuários");
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]);


  return (
    <div className="App">

      <Container>
        <Title>USUÁRIOS</Title>

        <Form>

        </Form>

        <Grid users={users}>

        </Grid>

      </Container>

      <GlobalStyle />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />




     
    </div>
  );
}

export default App;
