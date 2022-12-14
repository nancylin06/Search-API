import { useState, useEffect } from 'react'
import Section from './component/Section'

function App() {
  const [array, setArray] = useState('')
  const [newval, setNewval] = useState('')

  const [val, setVal] = useState('')

  function nameFunc(e) {
    setVal(e.target.value)
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${newval}`)
      .then((res) => res.json())
      .then((data) => setArray(data))
      .catch((error) => console.log(error))
  }, [array])

  return (
    <div>
      <div className="bg-gradient-to-b from-indigo-300 pt-5">
        <div className="container mx-auto w-96 relative">
          <input type="text" name="search" className="px-3 py-2 bg-gray-100 outline-none shadow-sm border-b-2 border-indigo-700 block w-80 sm:text-sm tracking-widest font-normal mx-auto rounded-md" placeholder="Search..." value={val} onChange={nameFunc} />
          <button type="button" className="text-indigo-700" onClick={() => setNewval(val)}>
            <i className="fa-solid fa-magnifying-glass absolute top-3 right-10"></i>
          </button>
        </div>
      </div>
      <Section
        ray={array}
      />
    </div>
  )
}

export default App
