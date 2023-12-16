import { useForm } from 'react-hook-form'
import s from '../SignIn/signIn.module.scss'

const FormEdit = (props) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        props.saveChangeProduct({
            id: props.id,
            ...data
        })
    }

    const onCancel = () => {
        props.cancelChangeProduct(props.id)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <h2>Edit Card</h2>
            <input
                        className={s.form_item_input}
                        placeholder="Name"
                        name="name"
                        {...register("name",{ pattern: /^[A-Za-z]+$/i, maxLength: 20 })}
                    />
            <input
                        type="sum"
                        className={s.form_item_input}
                        placeholder="Cost"
                        name="sum"
                        {...register("sum", { min: 1, max: 100000 })}
                    />
                    <button type='submit'>Save</button>
                    <button onClick={onCancel}>Cancel</button>
        </form>
    )
}

export default FormEdit