import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams }  from 'react-router-dom';
import dayjs from 'dayjs'

const OrderDetails = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await axios.get(`/api/orders/getbyid?id=${id}`);
            setOrder(data);
        };
        getOrder();
    }, []);

    return (
      
        <div className="container" style={{ marginTop: 80 }} >
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }} >
                <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: '30rem', backgroundColor: 'rgb(248, 249, 250)' }} >
                    {order && <div className="card-body">
                        <h3 className="card-title fw-bold">{order.buyer}</h3>
                        <p className="card-text fs-5">{order.email}</p>
                        <p className="card-text fs-5">{order.baseFlavor}</p>
                        <p className="card-text fs-5">{order.toppings.join(', ')}</p>
                        <p className="card-text fs-5">{order.specialRequests}</p>
                        <p className="card-text fs-5">{order.quantity}</p>
                        <p className="card-text fs-5">{dayjs(order.deliveryDate).format('MM/DD/YYYY')}</p>
                        <p className="card-text fs-5">{order.total.toFixed(2)}</p>
                    </div>}
                    <Link to='/view-orders'>
                        <button className="btn btn-primary w-100">Back to Orders</button>
                    </Link> 
                </div>
            </div>
        </div>
    )
};

export default OrderDetails;