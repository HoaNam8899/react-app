import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index } from './components/Index'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'
import { Details } from './components/Details'
import { Orders } from './components/Orders'
import { ChangeInfo } from './components/ChangeInfo'
import { CheckOut } from './components/CheckOut'
import { Login } from './components/Login'
import { Register } from './components/Register'
export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />}>
                <Route index element={<Shop />} />
                <Route path='details' element={<Details />} />
                <Route path='cart' element={<Cart />} />
                <Route path='checkout' element={<CheckOut />} />
                <Route path='orders' element={<Orders />} />
                <Route path='changeInfo' element={<ChangeInfo />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}
