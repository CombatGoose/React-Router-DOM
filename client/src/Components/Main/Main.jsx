import './main.scss'
import s from '../SignIn/signIn.module.scss'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Main = () => { 
    const users = [
        {
            login: "Admin",
            password: "123qwe"
        }
    ]

    const [formData, setFormData] = useState({
        login: "",
        password: ""  
    })

    const [repeatLogin, setRepeatLogin] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const handleChange = (formName, formValue) => { 
        setFormData({
            ...formData,
            [formName]: formValue
        })
    }

    const handleRepeatLoginChange = (value) => {
        setRepeatLogin(value)
    }

    const handleRepeatPasswordChange = (value) => {
        setRepeatPassword(value)
    }

    const navigate = useNavigate()

    const handleClick = () => { 
        const isLoginMatch = formData.login === repeatLogin
        const isPasswordMatch = formData.password === repeatPassword

        if (isLoginMatch && isPasswordMatch) {
            const foundUser = users.find(el => el.login === formData.login && el.password === repeatPassword)
            
            if (foundUser) {
                navigate('/products')
            } else {
                alert('Login or password is not correct')
            }
        } else {
            alert('Login and password should match in both fields')
        }
    }

    return (
        <>
            <form className={s.form}>
            <div
                className={s.form_item}
            >
                <input 
                    onChange={(e) => {
                        handleChange("login", e.target.value)
                    }}
                    type="text"
                    value={formData.login}
                    placeholder="Write your login"
                />
                <input 
                    className={s.form_item_input}
                    onChange={(e) => {
                        handleChange("password", e.target.value)
                    }}
                    type="password"
                    value={formData.password}
                    placeholder="Write your password"
                />
                <input 
                    className={s.form_item_input}
                    onChange={(e) => {
                        handleRepeatLoginChange(e.target.value)
                    }}
                    type="text"
                    value={repeatLogin}
                    placeholder="Write the login"
                />
                <input 
                    className={s.form_item_input}   
                    onChange={(e) => {
                        handleRepeatPasswordChange(e.target.value)
                    }}
                    type="password"
                    value={repeatPassword}
                    placeholder="Write the password"
                />
            </div>

            <button className={s.form_btn}  onClick={handleClick}>Go to products</button>
            </form>
        </>
    )
}

export default Main
