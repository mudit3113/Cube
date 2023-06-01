import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCustomers } from '../../Redux/Actions/customerAction';
import { setCustomer } from '../../Redux/Actions/customerAction';
import "./_customer-list.scss";

export const CustomerList = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers)
    const selectedCustomerId = useSelector((state) => state.selectedCustomer);
    console.log("SC",selectedCustomerId);

    useEffect(() => {
        dispatch(generateCustomers());
    }, [])

    const setSelectedCustomer = (id) => {
        // console.log("id clicked is ", id);
        dispatch(setCustomer(id))
    }

    return (
        <>
            <div className="customer-list-container">
                {customers.map((customer, index) => (
                    <div 
                    key={index} 
                    onClick={() => setSelectedCustomer(customer.id)} 
                    className={selectedCustomerId == customer.id ? "selected-customer" : ""}
                    >
                        <h3>{customer.name}</h3>
                        <p> {customer.title}</p>
                    </div>
                ))}

            </div>

        </>
    )
}