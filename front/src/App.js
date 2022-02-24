import { useState, useEffect } from 'react';
import Notas from './components/Notas';

function App() {
  const baseNotas = 
  [
    {
        "_id": "618311c652916b5104f9e7a3",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie mauris quis ex mattis, quis tempor eros vulputate. Cras cursus dignissim aliquet. Sed pulvinar diam vitae volutpat congue. Aliquam ornare nunc eu erat sodales, ut gravida augue egestas.",
    },
    {
        "_id": "618311cf52916b5104f9e7a5",
        "title": "Lista de compras - 3a",
        "body": "Comprar no mercado mais próximo:",
    },
    {
        "_id": "618311cf52916b5104f9e7a51",
        "body": "4a, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie mauris quis ex mattis, quis tempor eros vulputate. Cras cursus dignissim aliquet. Sed pulvinar diam vitae volutpat congue. Aliquam ornare nunc eu erat sodales, ut gravida augue egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie mauris quis ex mattis, quis tempor eros vulputate. Cras cursus dignissim aliquet. Sed pulvinar diam vitae volutpat congue. Aliquam ornare nunc eu erat sodales, ut gravida augue egestas.",
    },
    {
        "_id": "618311cf52916b5104f9e7a5a",
        "body": "Coisa única, 5a",
    },
    {
        "_id": "618311cf52916b5104f9e7a59",
        "body": "Lalalala, 6a",
    },
    {
        "_id": "618311cf52916b5104f9e7a5m",
        "body": "Comportamento estranho, principalmente no resize. Última nota",
    },
    {
        "_id": "id_inventado",
        "body": "nota de fevereiro de 2022.",
    },
    {
        "_id": "id_inventado2",
        "body": "Nota das 22 horas!",
    },
    {
        "_id": "id_inventado3",
        "body": "Nota da segunda-feira",
    },
    {
        "_id": "id_inventado4",
        "body": "Nota da 4a",
    }
  ]

  const [ todasAsNotas, setTodasAsNotas] = useState([])

  // Tamanho da nota:
  const noteWidthPx = 260 // Dá para diminuir, olhar também largura

  // Retornando a quantidade de colunas baseado na largura da janela:
  const columnsCount = () => Math.floor((window.innerWidth - 20) / noteWidthPx)
  
  // Preparando número de colunas baseado na largura da janela. Retornando array com arrays:
  let columns  = []
  const createColumns = () => {
    for (let i = 0; i < columnsCount(); i++)
    columns.push([])
  }
  createColumns()

  const columnsSize = () => {
    let size = columns.map(arr => arr.length)
    return size}

  const columnToBeFill = () => { 
   let smallerValue = Math.min(...columnsSize())
   let index = columnsSize().findIndex(item => item === smallerValue)

   return index
  }
  
  const fillColumns = () => {
    baseNotas.forEach((note, index) => {
      if (columnToBeFill() !== -1) { /// precisa disso?
        columns[columnToBeFill()].push(note)
      }
    })
  }

  fillColumns()

  window.addEventListener('resize', () => {
    setTimeout(() => {
      columns  = []
      createColumns()
      fillColumns()
      setTodasAsNotas(columns)
    }, 500);
  })

  useEffect(() => { // Executa somente uma vez
    createColumns()
    fillColumns()
  }, [])

// Template:

  return (
    <div id="desk">
    {columns.map((list, index) => {
      return <div className="column" key={index}>
        <Notas notas={list}/>
      </div>
    })}
    </div>
  )
}

export default App;
