import s from "./signIn.module.scss"

import { useForm } from 'react-hook-form'
const SignIn = (props) => { 

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        props.setNewProduct(data)
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
                        {...register("name",{ pattern: /^[A-Za-z]+$/i, maxLength: 20 })}
                    />

                </div>

                <div className={s.form_item}>

                    <p className={s.form_item_text}>Entry Cost</p>

                    <input
                        type="number"
                        className={s.form_item_input}
                        placeholder="Cost"
                        name="sum"
                        {...register("sum", { min: 1, max: 10 })}
                    />

                </div>

                <button type="submit" className={s.form_btn}>Submit</button>

            </form>

        </div>

    )
}

export default SignIn