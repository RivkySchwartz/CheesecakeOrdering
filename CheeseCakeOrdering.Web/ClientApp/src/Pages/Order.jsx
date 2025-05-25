import React, { useState } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import OrderPreview from '../components/OrderPreview';

const Order = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        buyer: '',
        email: '',
        baseFlavor: '',
        toppings: [],
        specialRequests: '',
        quantity: 1,
        deliveryDate: '',
        total: ''
    });

    const calculateTotal = () => {
        if (!form.baseFlavor) return '0.00';
        const basePrice = 49.99;
        const toppingPrice = 3.95 * form.toppings.length;
        return Number((basePrice + toppingPrice) * form.quantity).toFixed(2);
    };

    const onSubmitClick = async () => {
        await axios.post('/api/orders/add', {
            ...form,
            total: calculateTotal()
        });
        navigate('/success');
    }



    return (
        <div className="container" style={{ marginTop: 80 }} >
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <OrderForm form={form} setForm={setForm} onSubmitClick={onSubmitClick} />
                </div>
                <div className="col-md-6">
                    <OrderPreview form={form} total={calculateTotal()} />
                </div>
            </div>
        </div>
            
    );
};
export default Order;