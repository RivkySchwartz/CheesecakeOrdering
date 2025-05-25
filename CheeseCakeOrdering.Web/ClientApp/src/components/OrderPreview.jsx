import React from 'react';
import dayjs from 'dayjs';

const OrderPreview = ({ form, total }) => {

    return (
        <div className="col-md-6 position-sticky" style={{ top: '2rem' }} >
            <h2 className="mb-4">Live Preview</h2>
            <div className="card" style={{ width: '18rem' }}>
                <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake" />
                <div className="card-body">
                    <h5 className="card-title">Your Custom Cheesecake</h5>
                    <p className="card-text">Base: {form.baseFlavor}</p>
                    <p className="card-text">Toppings: {form.toppings.join(', ')}</p>
                    <p className="card-text">Special Requests: {form.specialRequests}</p>
                    <p className="card-text">Quantity: {form.quantity}</p>
                    <p className="card-text">Delivery Date: {dayjs(form.deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fw-bold">Total: ${total}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderPreview;