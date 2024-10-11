import React, { useEffect, useState } from 'react'
import { getCustomerById } from '../../services/CustomerServices';
import { useParams } from 'react-router-dom';

function DetailsPage() {
    const [customer,setCustomer] = useState({
        first_name: '',
        last_name: '',
        username: '',
        phone_number: '',
        address:{
            street_address: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        },
        date_of_birth: '',
        gender: '',
    });

    const {id} = useParams();
    useEffect(()=>{
        getCustomerById(id).then((respone)=>{
            setCustomer({
                first_name: respone.data.first_name,
                last_name: respone.data.last_name,
                username: respone.data.username,
                phone_number: respone.data.phone_number,
                address:{
                    street_address: respone.data.address[0].street_address,
                    city: respone.data.address[0].city,
                    state: respone.data.address[0].state,
                    zip: respone.data.address[0].zip,
                    country: respone.data.address[0].country
                },
                date_of_birth: respone.data.date_of_birth,
                gender: respone.data.gender
            });
        })
    })
  return (
    <div className="container">
        <h1 className="title">Customer Information</h1>
        <div className="info-card">
            <h2>Personal Details</h2>
            <div className="info-row">
                <span className="label">First Name:</span>
                <span className="value">{customer.first_name}</span>
            </div>
            <div className="info-row">
                <span className="label">Last Name:</span>
                <span className="value">{customer.last_name}</span>
            </div>
            <div className="info-row">
                <span className="label">Email:</span>
                <span className="value">{customer.username}</span>
            </div>
            <div className="info-row">
                <span className="label">Phone Number:</span>
                <span className="value">{customer.phone_number}</span>
            </div>
            <div className="info-row">
                <span className="label">Date of Birth:</span>
                <span className="value">{customer.date_of_birth}</span>
            </div>
            <div className="info-row">
                <span className="label">Gender:</span>
                <span className="value">{customer.gender}</span>
            </div>

            <h2 className='address-info-label'>Address Details</h2>
            <div className="info-row">
                <span className="label">Street Address:</span>
                <span className="value">{customer.address.street_address}</span>
            </div>
            <div className="info-row">
                <span className="label">City:</span>
                <span className="value">{customer.address.city}</span>
            </div>
            <div className="info-row">
                <span className="label">State:</span>
                <span className="value">{customer.address.state}</span>
            </div>
            <div className="info-row">
                <span className="label">Zip Code:</span>
                <span className="value">{customer.address.zip}</span>
            </div>
            <div className="info-row">
                <span className="label">Country:</span>
                <span className="value">{customer.address.country}</span>
            </div>
        </div>
    </div>
    )
}

export default DetailsPage