import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Products from './Components/Products'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/products" element={<Products/>}/>
                </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App