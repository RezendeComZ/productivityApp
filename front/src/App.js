import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="container">
    <Header msg='Uma msg!'/>
    <h1>Hello</h1>

    <Card style={{ color: "blue"}}>
      <Card.Img />
      <Card.Body>
        <Card.Title>
          Exemplo
        </Card.Title>
        <Card.Text>
          Isso é um exemplo
        </Card.Text>

      </Card.Body>
    </Card>
    <Alert variant="primary">Isso é um alerta</Alert>
    <Button>Botão teste</Button>

    </div>
  );
}

export default App;
