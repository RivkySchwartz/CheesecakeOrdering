import React from 'react';
import { produce } from 'immer';

const toppings = [
    "Strawberries", "Blueberries", "Raspberries", "Cherry Topping", "Chocolate Ganache",
    "Caramel Drizzle", "Whipped Cream", "Crushed Oreos", "Toasted Coconut", "Peanut Butter Sauce",
    "Chopped Pecans", "Lemon Curd", "Cookie Crumbles", "Sprinkles", "Marshmallow Fluff"
];

const baseFlavors = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie']

const OrderForm = ({ form, setForm, onSubmitClick }) => {

    const onTextChange = (e) => {
        const { name, value } = e.target;

        const nextState = produce(form, draft => {
            draft[name] = value;
        });

        setForm(nextState);
    };

    const onQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setForm(current => ({ ...current, quantity: value }));
        }
    };

    const onToppingChange = (topping) => {
        if (form.toppings.includes(topping)) {
            setForm({
                ...form, toppings: form.toppings.filter(t => t !== topping)
            });
        } else {
            setForm({
                ...form, toppings: [...form.toppings, topping]
            });
        }
    };


    const isFormValid = () => {
        return (
            form.buyer.trim() !== '' &&
            form.email.trim() !== '' &&
            form.baseFlavor !== '' &&
            form.deliveryDate !== '' &&
            form.quantity > 0
        );
    };

    return (
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="buyer" onChange={onTextChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" value={form.email} onChange={onTextChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select name="baseFlavor" value={form.baseFlavor} onChange={onTextChange} className='form-select'>
                            <option value="">Choose...</option>
                            {baseFlavors.map((f, index) => (
                                <option key={index} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Toppings (each topping adds an additional $3.95)
                        </label>
                        {toppings.map((topping, index) => (
                            <div className="form-check" key={index}>
                                <label className="form-check-label">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`topping-${index}`}
                                        value={topping}
                                        checked={form.toppings.includes(topping)}
                                        onChange={() => onToppingChange(topping)}
                                    />
                                    {topping}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Special Requests</label>
                        <textarea className="form-control" rows="3" name="specialRequests" value={form.specialRequests} onChange={onTextChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" name="quantity" className="form-control" onChange={onQuantityChange} min="1" defaultValue="1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" name="deliveryDate" value={form.deliveryDate} onChange={onTextChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!isFormValid()} onClick={onSubmitClick}>Submit Order</button>
                </div>
            </div>
    );
};
export default OrderForm;