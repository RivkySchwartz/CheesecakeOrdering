import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs'


const ViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/orders/getallorders');
            setOrders(data);
        }

        getOrders();

    }, []);

    return (
        <div className="container" style={{ marginTop: 80 }} >
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg" style={{ borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: 15 }} >
                            <th>Name/Email</th>
                            <th>Base Flavor</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o.id} style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
                                <td>
                                    <Link to={`/order-details/${o.id}`} style={{ paddingTop: 15, paddingBottom: 15 }}>
                                        {o.buyer} - {o.email}
                                    </Link>
                                </td>
                                <td>{o.baseFlavor}</td>
                                <td>{o.toppings.join(', ')}</td>
                                <td>{o.specialRequests}</td>
                                <td>{o.quantity}</td>
                                <td>{dayjs(o.deliveryDate).format('MM/DD/YYYY')}</td>
                                <td>${o.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ViewOrders;