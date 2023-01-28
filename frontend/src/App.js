import GlobalStyle from "./styles/global";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import { Container } from "./styles/container";
import { Title } from "./styles/title";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">

      <Container>
        <Title>USUÁRIOS</Title>

        <Form>
          
        </Form>

      </Container>

      <GlobalStyle />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />




     
    </div>
  );
}

export default App;
