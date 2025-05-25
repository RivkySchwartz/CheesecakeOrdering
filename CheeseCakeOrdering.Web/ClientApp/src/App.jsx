import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Order from './Pages/order';
import ViewOrders from './Pages/ViewOrders';
import Success from './Pages/Success';
import OrderDetails from './Pages/OrderDetails'
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/view-orders' element={<ViewOrders />} />
                <Route path='/success' element={<Success />} />
                <Route path='/order-details/:id' element={<OrderDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;