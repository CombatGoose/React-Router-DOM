import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import { nanoid } from 'nanoid'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Products from './Components/Products'
import SignIn from './Components/SignIn/SignIn'
import List from './Components/List/List'

const App = () => {
    const [products, setProducts] = useState(
            JSON.parse(localStorage.getItem('products')) ?
            JSON.parse(localStorage.getItem('products')) :
            [

            ]
    )

const setNewProducts = (productCandidate) => {
    setProducts(
        [
            ...products,
            {
                nanoid,
                ...productCandidate,
                status:"open"
            }
        ]
    )
    localStorage.setItem('products', JSON.stringify(products))
}

const deleteProductItem = (idToDelete) => {
    const newList = products.filter(item => item.id !== idToDelete)
    setProducts(newList)
    localStorage.removeItem('products')
}

const changeStatusProduct = (idCandidate) => {
    const newList = products.map(item => {
        if (item.id === idCandidate) {
            item.status = "edit"
        }
        return item
    })
    setProducts(newList)
}

const saveChangeProduct = (newInfo) => {
    const newList = products.map(item => {
        if (item.id === newInfo.id) {
            item = {
                ...item,
                ...newInfo,
                status: "open"
            }
        }
        return item
    })
    setProducts([...newList])
}

const cancelChangeProduct = (idCandidate) => {
    const newList = products.map(item => {
        if (item.id === idCandidate) {
            item.status = "open"
        }
        return item
    })
    setProducts([...newList])
}

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/products" element={<Products/>}/>
                </Routes>
                <SignIn
                setNewProduct={setNewProducts}
                />
                <List
                products={products}
                deleteProductItem={deleteProductItem}
                changeStatusProduct={changeStatusProduct}
                saveChangeProduct={saveChangeProduct}
                cancelChangeProduct={cancelChangeProduct}
                />
        </BrowserRouter>
        </div>
    )
}

export default App