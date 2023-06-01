import { useSelector } from 'react-redux';
import "./_customer-card.scss";
import React from "react";
import { ImageGrid } from '../ImageGrid';

export const CustomerCard = () => {
    const customers = useSelector((state) => state.customers)
    // console.log("customers",customers);
    const selectedCustomerId = useSelector((state) => state.selectedCustomer)
    const customer = customers.filter((item) => item.id == selectedCustomerId)
    // console.log("customer",customer);

    return (
        <>
            <div className="card-container">
                <div className="customer-card-details">
                    {customer.map((item, index) => (
                        <div key={index}>
                            <h3> {item.name} details here:</h3>
                            <p>Name: <span>{item.name}</span></p>
                            <p>Title: <span>{item.title}</span></p>
                            <p>Address:<span>{item.address}</span></p>
                        </div>
                    ))}

                </div>
                <ImageGrid />
                
            </div>


        </>
    )
}