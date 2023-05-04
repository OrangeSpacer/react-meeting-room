
import { useForm } from 'react-hook-form'
import { useFill } from './hooks/useFill'
import './App.css'



const App = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))
  const floors = useFill(3,27)
  const meetingsRoom = useFill(1,10)
  
  return (
    <div className='body'>
      <div className='container'>
        <h1 className='title'>
          Забронировать переговорную
        </h1>
        <form onSubmit={onSubmit} className='form'>
          <div className='selects'>
            <div>
              <label className='label'>
                <span className='description'>
                  Выбор башни
                </span>
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
              <label className='label'>
                <span className='description'>
                  Выбор этажа
                </span>
                <select {...register("floor")}>
                    {floors.map(floor => <option key={floor} value={floor}>{floor}</option>)}
                </select>
              </label>
            </div>
            <div>
              <label className='label'>
                <span className='description'>
                  Выбор номера переговорной
                </span>
                <select {...register("meetingRoomNumber")}>
                    {meetingsRoom.map(room => <option key={room} value={room}>{room}</option>)}
                </select>
              </label>
            </div>
          </div>
          <div className='block'>
            <label className='label'>
              <span className='description'>
                Дата
              </span>
              <input className='input' type='date' {...register("date", {required: "Дата обязательна"})}/>
              {errors.date && <span>{errors.date.message}</span>}
            </label>
          </div>
          <div className='block'>
            <label className='label'>
              <span className='description'>
                Комментарий
              </span>
              <textarea className='textarea' defaultValue="" {...register("comment")}/>
            </label>
          </div>
          <div className='block'>
            <div className='buttons'>
              <button type='submit' className='button'>
                Отправить
              </button>
              <button type='reset' className='button'>
                Очистить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

