import { useState } from 'react';
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
  const noteWidthPx = 220 // Dá para diminuir, olhar também largura

  let columns  = []

  const createColumns = () => {
    // Retornando a quantidade de colunas baseado na largura da janela:
    let columnsCount = Math.floor((window.innerWidth - 20) / noteWidthPx)
    for (let i = 0; i < columnsCount; i++)
    columns.push([])
  }

// ! Ao invés de adicionar e depois contar o tamanho de cada coluna, melhor dar um INC a cada adição e já ter o tamanho da coluna?

  // Retorna um vetor com o tamanho das colunas:
  const columnsSize = () => { 
    let size = columns.map(arr => arr.length) // ! armazenar em outro lugar ao invés de executar a função sempre?
    return size}

  const columnToBeFill = () => { 
   let smallerValue = Math.min(...columnsSize()) // ! precisa executar esse columnsSize sempre para cada nota? parece ineficiente
   let index = columnsSize().findIndex(item => item === smallerValue)

   return index
  }
  
  const fillColumns = () => {
    baseNotas.forEach(note => {
      if (columnToBeFill() !== -1) { /// precisa disso?
        columns[columnToBeFill()].push(note)
      }
    })
  }


  window.addEventListener('resize', () => {
    setTimeout(() => {
      columns  = []
      createColumns()
      fillColumns()
      setTodasAsNotas(columns)
    }, 500);
  })

  createColumns()
  fillColumns()

  // useEffect(() => { // Executa somente uma vez
  //   createColumns()
  //   fillColumns()
  // }, [])

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
