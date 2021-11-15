import { useState, useEffect } from 'react';
import Notas from './components/Notas';
// import 'bootstrap/dist/css/bootstrap.min.css'
// desinstalar o 'react-bootstrap'

function App() {
  // const [notas, setNotas] = useState([])
  const [ todasAsNotas, settodasAsNotas] = useState(
    [
      {
          "_id": "618311c652916b5104f9e7a3",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie mauris quis ex mattis, quis tempor eros vulputate. Cras cursus dignissim aliquet. Sed pulvinar diam vitae volutpat congue. Aliquam ornare nunc eu erat sodales, ut gravida augue egestas.",
          "lists": [
              [
                  "Limpeza",
                  "/cDetergente",
                  "Amaciante"
              ],
              [
                  "Comida",
                  "Arroz",
                  "/cFeijão"
              ],
              [
                  "",
                  "Pilha",
                  "Cabo USB"
              ]
          ],
          "labels": [
              "importante",
              "trabalho"
          ],
          "pinned": false,
          "color": "blue",
          "reminders": [
              1635884911075
          ],
          "permissions": [
              {
                  "user": "joao1979",
                  "edit": true
              }
          ],
          "url": "listaCompras",
          "__v": 0
      },
      {
          "_id": "618311cf52916b5104f9e7a5",
          "title": "Lista de compras",
          "body": "Comprar no mercado mais próximo:",
          "lists": [
              [
                  "Limpeza",
                  "/cDetergente",
                  "Amaciante"
              ],
              [
                  "Comida",
                  "Arroz",
                  "/cFeijão"
              ],
              [
                  "",
                  "Pilha",
                  "Cabo USB"
              ]
          ],
          "labels": [
              "importante",
              "trabalho"
          ],
          "pinned": false,
          "color": "blue",
          "reminders": [
              1635884911075
          ],
          "permissions": [
              {
                  "user": "joao1979",
                  "edit": true
              }
          ],
          "url": "listaCompras",
          "__v": 0
      },
      {
          "_id": "618311d352916b5104f9e7a7",
          "title": "Lista de compras",
          "body": "terceira",
          "lists": [
              [
                  "Limpeza",
                  "/cDetergente",
                  "Amaciante"
              ],
              [
                  "Comida",
                  "Arroz",
                  "/cFeijão"
              ],
              [
                  "",
                  "Pilha",
                  "Cabo USB"
              ]
          ],
          "labels": [
              "importante",
              "trabalho"
          ],
          "pinned": false,
          "color": "blue",
          "reminders": [
              1635884911075
          ],
          "permissions": [
              {
                  "user": "joao1979",
                  "edit": true
              }
          ],
          "url": "listaCompras",
          "__v": 0
      }
    ]
  )
  
  return (
    <div id="desk">
      <div className="column">
        <Notas notas={todasAsNotas}/>
      </div>
    {/* <Header msg='Uma msg!'/>
    <h1>Hello</h1> */}
    {/* <Card style={{ color: "blue"}}>
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
    <Button>Botão teste</Button> */}

    </div>
  );
}

export default App;
