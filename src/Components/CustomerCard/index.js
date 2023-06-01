import react from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./_customer-card.scss";
import React, { useEffect } from "react";
import { fetchRandomImages } from "../../Redux/Actions/customerAction";

export const CustomerCard = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers)
    // console.log("customers",customers);
    const selectedCustomerId = useSelector((state) => state.selectedCustomer)
    const customer = customers.filter((item) => item.id == selectedCustomerId)
    const images = useSelector((state) => state.images);
    console.log("images", images);
    // console.log("customer",customer);
  
    // using useEffect hook to call sideEffect - fetchAPI 
        useEffect(() => {
            dispatch(fetchRandomImages());
        },[])

    return (
        <>
            <div className="card-container">
                <div className="customer-card-details">
                    {customer.map((item, index) => (
                        <div key={index}>
                            <p>Name: {item.name}</p>
                            <p>Title: {item.title}</p>
                            <p>  Address:{item.address}</p>

                        </div>
                    ))}

                </div>
                <div className="image-container">
                    <div className="image-grid">
                        {images.map((image) => (
                            <div className="image-cell">
                                <img className="image-cell-avatar" src={image.url} alt={image.title} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>
    )
}