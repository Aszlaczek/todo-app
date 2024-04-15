import { useEffect, useState } from "react"
import add from './assets/add_circle_FILL0_wght400_GRAD0_opsz24.svg'
import trash from './assets/delete_forever_FILL0_wght400_GRAD0_opsz24.svg'
import edit from './assets/edit_FILL0_wght400_GRAD0_opsz24.svg'
import Popup from "./Popup"
import './css/App.css'


export default function App() {
  const [data, setData] = useState<string[]>([])
  const [name, setName] = useState('')

  const addToList = () => {
    let list = [...data]
    if (name !== '') {
      list.push(name)
      setData(list)
    }
    localStorage.setItem('items', JSON.stringify(list))
    setName('')
  }

  useEffect(() => {
    let list: string[] = []
    list = JSON.parse(localStorage.getItem('items')!)
    setData(list)
  }, [])

  const showAll = () => {
    return data.map((e, id) => {
      return (
        <div className="box" key={id}>
          <div className="name" >{e}</div>
          <div className="action">
            <img src={edit} alt="edit" onClick={() => alert('edit')} />
          </div>
          <div className="action">
            <img src={trash} alt="delete" onClick={() => deleteAction(e)} />
          </div>
        </div>
      )
    }
    )
  }
  //  TODO make a 5 visible and one extra
  // const showMain = () => {}

  const deleteAction = (name: string) => {
    let list = [...data]
    list.map((e, i) => {
      if (e === name) localStorage.getItem('items'), list.splice(i, 1)
    })
    setData(list)
    localStorage.setItem('items', JSON.stringify(list))
  }

  return (
    <div className="main-container">
      <h1>Welcome in Todo app</h1>
      <div className="container">
        <form onSubmit={addToList}>
          <input type="text" id="name" value={name} placeholder="Write here" onChange={e => setName(e.target.value)} />
          <img src={add} alt="add" onClick={() => addToList()} />
        </form>
        <div className="list">
          {data.length !== 0
            ? showAll()
            : <Popup></Popup>}
        </div>
      </div>
    </div >
  )
}