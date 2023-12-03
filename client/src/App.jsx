import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Products from './Components/Products'
import SignIn from './Components/SignIn/SignIn'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/products" element={<Products/>}/>
                </Routes>
                <SignIn/>
        </BrowserRouter>
        </div>
    )
}

export default App