
import { useForm } from 'react-hook-form'
import './App.css'


const App = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <form>
      <select id='tower'>
        <option value="A">
            A
        </option>
        <option value="B">
            B
        </option>
      </select>
    </form>
  )
}

export default App

