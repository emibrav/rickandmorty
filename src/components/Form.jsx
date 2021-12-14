import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Form = ({setCharacterName}) => {

  const [inputs, handleChange, reset] = useFormulario({
    nombre: ''
  })

  const {nombre} = inputs

  const handleSubmit = e => {
    e.preventDefault()
    console.log(nombre)
    if(!nombre.trim()) {
      return Swal.fire({
        title: 'Completá el campo!!!!',
        text: 'Está vacío!!!!!!',
        icon: 'error',
        confirmButtonText: 'Bueno :('
      })
    }
    setCharacterName(nombre.trim().toLowerCase())
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-2 mb-2">
        <input 
          placeholder="Rick"
          type="text"
          className="form-control mb-2"
          value={nombre}
          onChange={handleChange}
          name="nombre"
        />
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
    </>
  )
}

export default Form
