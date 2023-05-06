
import { Controller, useForm } from 'react-hook-form'
import { useFill } from './hooks/useFill'
import { useRef} from 'react'
import SelectComponent from './Components/Select/Select'
import Error from './Components/Error/Error'

import './App.css'
import cn from "classnames"


const App = () => {
  const {register, handleSubmit, formState: {errors}, control} = useForm()
  const onSubmit = handleSubmit((data) => console.log(data))
  const floors = useFill(3,27)
  const meetingsRoom = useFill(1,10)
  const floorsRef = useRef(null);
  const towerRef = useRef(null);
  const meetingRef = useRef(null);
  const towers=[
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
  ]

   const handleClear = () => {
    floorsRef.current.clearValue()
    towerRef.current.clearValue()
    meetingRef.current.clearValue()
  };
  
  return (
    <div className='body'>
      <div className='container'>
        <h1 className='title'>
          Забронировать переговорную
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <div className='selects'>
            <div>
              <label className='label'>
                <span className='description'>
                  Выбор башни
                </span>
                <Controller
                  name="tower"
                  control={control}
                  defaultValue=""
                  rules={{required: "Поле обязательно"}}
                  render={({ field: { onChange, value } }) => (
                    <SelectComponent placeholder="Башня" refSelect={towerRef} options={towers} value={value} onChange={onChange} error={errors.tower} />
                  )}
                />
              </label>
            </div>
            <div>
              <label className='label'>
                <span className='description'>
                  Выбор этажа
                </span>
                <Controller
                  name="floors"
                  control={control}
                  defaultValue=""
                  rules={{required: "Поле обязательно"}}
                  render={({ field: { onChange, value } }) => (
                    <SelectComponent placeholder="Этаж" refSelect={floorsRef} options={floors} value={value} onChange={onChange} error={errors.floors} />
                  )}
                />
              </label>
            </div>
            <div>
              <label className='label'>
                <span className='description'>
                  Выбор номера переговорной
                </span>
                <Controller
                  name="meetingsRoom"
                  control={control}
                  defaultValue=""
                  rules={{required: "Поле обязательно"}}
                  render={({ field: {onChange,value} }) => (
                      <SelectComponent placeholder="Переговорная" refSelect={meetingRef} options={meetingsRoom} value={value} onChange={onChange} error={errors.meetingsRoom}/>
                    )}
                />
              </label>
            </div>
          </div>
          <div className='block'>
            <label className='label'>
              <span className='description'>
                Дата
              </span>
              <input className={cn("input",{["errorBorder"]: errors.date})} type='date' {...register("date", {required: "Дата обязательна"})}/>
              {errors.date && <Error errorMessage={errors.date.message}/>}
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
              <button type='reset' onClick={handleClear} className='button'>
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

