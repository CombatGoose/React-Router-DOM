import s from "./signIn.module.scss"

import { useForm } from 'react-hook-form'
import { useState } from 'react'
const SignIn = () => { 

    const { register, handleSubmit } = useForm()
    const [resultEl, setResultEl] = useState([])

    const onSubmit = (data) => { 
        const resultDiv = (
            <div>

                <h3>{data.name}</h3>
                <p>{data.sum}</p>
                
            </div>
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