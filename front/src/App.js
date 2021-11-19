import { useState, useEffect } from 'react';
import Notas from './components/Notas';

function App() {
  const [ todasAsNotas, settodasAsNotas] = useState(
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
          "_id": "618311cf52916b5104f9e7a5n",
          "body": "Coisa única, 5a",
      },
      {
          "_id": "618311cf52916b5104f9e7a5n",
          "body": "Comportamento estranho, principalmente no resize. Última nota",
      }
    ]
  )

  let [ columnsDivsPre, setcolumnsDivsPre ] = useState([])
  const notesByWidth = (noteSize = 250) => Math.floor((window.innerWidth - 20) / noteSize)

  // let columnsContent = []

  const notasDistribuicao = () => {
    todasAsNotas.forEach(nota => {
      let colunaDaVez = Math.max.apply(null, (columnsDivsPre.map(coluna => parseInt(coluna.length)))) // acho que tá sem lógica
      columnsDivsPre[colunaDaVez].push(nota)
    })
    setcolumnsDivsPre(columnsDivsPre)

  }

  const columnsGenerator = () => {
    columnsDivsPre = []
    for (let i = 1; i <= notesByWidth(); i++) {
      columnsDivsPre.push([])
    }
    notasDistribuicao()

    console.log(columnsDivsPre);
  }

  useEffect(() => { // Executa somente uma vez, para criar as colunas na inicialização. Evita loop.
    columnsGenerator()
  }, [])

  window.addEventListener('resize', () => {
    if (columnsDivsPre.length !== notesByWidth()) {
      columnsGenerator()
    }
  })

  return (
    <div id="desk">
    {columnsDivsPre.map(list => {
      return <div className="column">
        <Notas notas={list}/>
      </div>
    })}
    </div>
  )
}

export default App;
