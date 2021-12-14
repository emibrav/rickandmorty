import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import Card from "./Card"
import Loading from "./Loading";

export const PrintData = ({characterName}) => {

  const [characterSearched, setCharacterSearched] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    consumeApi(characterName)
  }, [characterName])

  const consumeApi = async(nombre) => {
    setLoading(true)
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
      console.log(res)
      if(!res.ok){
        return Swal.fire({
          title: "Error!",
          text: "Personaje no encontrado",
          icon: "error"
        })
      }
      const data = await res.json();
      console.log(data.results)
      setCharacterSearched(data.results)
      // setCharacterSearched((old) => [...old, ...data.results])
    } 
    catch(error) {
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      {
        loading ? <Loading /> : 
          <div className="row">
            {
              characterSearched.map(item => (
                <Card key={item.id} characters={item} />
              ))
            }
          </div>
      }
    </>

  )
}

export default PrintData;