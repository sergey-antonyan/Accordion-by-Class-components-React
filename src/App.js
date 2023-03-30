import Accordion from "./Accordion/Accordion"
import { useState, useEffect } from "react"
import Button from "./Button"
import AppClass from "./Class/AppClass"

function App() {

  const URL = 'https://countriesnow.space/api/v0.1/countries/capital'
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const length = data.length
  let count = 10
  const start = (page - 1 ) * count;
  const end = start + count;
  const dataArray = data.slice(start, end)

  useEffect(() => {
    fetch(URL) 
    .then(result => result.json())
    .then(data => setData(data.data))
   
  },[])
  console.log(data);

  function getPage(page) {
    setPage(page)
  }

  return (
    <>     
    <div className="globalContainer">
      <h1>React Accordion Demo</h1>
      {
        dataArray.map((item, index) => {
          return (
            <Accordion key = {index} data={item} count= {count}/>
          )
        })
      }
      <Button length = {length} getPage = {getPage} count = {count}/>
      
    </div>
    <AppClass/>
    </>

    
  )
}

export default App