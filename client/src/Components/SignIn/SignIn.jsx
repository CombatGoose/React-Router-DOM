import s from "./signIn.module.scss"

import { useForm } from 'react-hook-form'
import { useState } from 'react'
const SignIn = () => { 

    const { register, handleSubmit } = useForm()
    const [resultEl, setResultEl] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleDelete = (index) => {
        const updatedResultEl = resultEl.filter((el, i) => i !== index)
        setResultEl(updatedResultEl) 
      }

    const onChangeSubmit = (newData) => {
        console.log(newData)
    }

    const onSubmit = (data) => {
        console.log(data) 
        const resultDiv = (
            <form onSubmit={handleSubmit(onChangeSubmit)}>

                <h3>{data.name}</h3>
                <p>{data.sum}</p>
                <input 
                type="text" 
                placeholder="Change name"
                name="newName"
                {...register("newName",{required:true})}
                 />
                <button type="submit" onClick={() => handleDelete(resultEl.length)}>Delete</button>
                
            </form>
        )
        setResultEl([...resultEl, resultDiv])

    }
    
    return (
        <div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={s.form}
            >

                <div className={s.form_item}>

                    <p className={s.form_item_text}>Entry Name</p>

                    <input
                        className={s.form_item_input}
                        placeholder="Name"
                        name="name"
                        {...register("name",{required:true})}
                    />

                </div>

                <div className={s.form_item}>

                    <p className={s.form_item_text}>Entry Cost</p>

                    <input
                        type="text"
                        className={s.form_item_input}
                        placeholder="Cost"
                        name="sum"
                        {...register("sum", {required: true})}
                    />

                </div>

                <button type="submit" className={s.form_btn}>Submit</button>

            </form>

        {
            resultEl && (
                <div className={s.result}>
                    {resultEl}
                </div>
            )
        }

        </div>

    )
}

export default SignIn