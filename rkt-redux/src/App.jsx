import { useState } from 'react'
import './App.css'
import { useAddCategoriesMutation, useDeleteCategoryMutation, useGetCategoriesQuery } from './redux/Slices/Category'


function App() {
  let { data, isLoading, refetch } = useGetCategoriesQuery()
  let [inp, setInp] = useState('')
  let [addCategories] = useAddCategoriesMutation()
  let [deleteCategory] = useDeleteCategoryMutation()

  async function handleSubmit(e) {
    e.preventDefault()
    let newData = {
      name: inp.trim()
    }
    await addCategories(newData)
    refetch()
    setInp(" ")
  }
  async function handleDelete(id) {
    await deleteCategory(id)
    refetch()
  }


  return (
    <>
      {
        isLoading ? (
          <h1>...Loading</h1>
        ) : (
          <>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h2>Add</h2>
              <input type="text" placeholder='add category' style={{ padding: "5px 10px", marginRight: "10px" }} onChange={(e) => setInp(e.target.value)} value={inp} />
              <button type="submit" >Add</button>
            </form>
            <ol>
              <h3>Datas</h3>
              {
                data.map((inf) => (
                  <li key={inf.id} style={{ margin: "10px" }}><span>{inf.name}</span> <button onClick={() => handleDelete(inf.id)}>Delete</button></li>
                ))
              }
            </ol>

          </>
        )
      }
    </>
  )
}

export default App
