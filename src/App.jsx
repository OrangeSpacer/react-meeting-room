
import { useForm } from 'react-hook-form'
import { useFill } from './hooks/useFill'
import './App.css'



const App = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))
  const floors = useFill(3,27)
  const meetingsRoom = useFill(1,10)
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Выбор башни
          <select id='tower' {...register("tower")}>
          <option value="A">
              A
          </option>
          <option value="B">
              B
          </option>
        </select>
        </label>
      </div>
      <div>
        <label>
          Выбор этажа
          <select {...register("floor")}>
              {floors.map(floor => <option key={floor} value={floor}>{floor}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label>
          Выбор номера переговорной
          <select {...register("meetingRoomNumber")}>
              {meetingsRoom.map(room => <option key={room} value={room}>{room}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label>
          Дата
          <input type='date' {...register("date", {required: "Дата обязательна"})}/>
          {errors.date && <span>{errors.date.message}</span>}
        </label>
      </div>
      <div>
        <label>
          Комментарий
          <textarea {...register("comment")}/>
        </label>
      </div>
      <div>
        <div>
          <button type='submit'>
            Отправить
          </button>
          <button onClick={() => reset({})}>
            Очистить
          </button>
        </div>
      </div>
    </form>
  )
}

export default App

