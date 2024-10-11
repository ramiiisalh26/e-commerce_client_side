import React, { useEffect, useState } from 'react'
import { deleteCustomerById, listCustomers } from '../../services/CustomerServices'
import { useNavigate } from 'react-router-dom'
function ListCustomerComponents() {
    
    const [customers, setCustomers] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllCustomers();
    },[])

    function getAllCustomers(){
        listCustomers().then((response) => {
            setCustomers(response.data);
        }).catch(err => {
            console.error(err);
        })
    }

    function addNewCustomer(){
        navigator("/customer/add")
    }

    function detailsPage(id){
        navigator(`/customer/details-page/${id}`)
    }

    function updateCustomer(id){
        navigator(`/customer/update/${id}`);
    }

    function deleteCustomer(id){
        deleteCustomerById(id).then((reponse)=>{
            getAllCustomers();
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Customers</h2>
        <button className='btn btn-primary mb-2' onClick={addNewCustomer}>Add Customer</button>
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map(customer => 
                    <tr key={customer.id} onClick={() => detailsPage(customer.id)}>
                        <td>{customer.id}</td>
                        <td>{customer.first_name}</td>
                        <td>{customer.last_name}</td>
                        <td>{customer.username}</td>
                        <td className='btns'>
                            <button className='btn btn-info' onClick={(e) => {e.stopPropagation(); updateCustomer(customer.id)}}>Update</button>
                            <button className='btn btn-danger' onClick={(e) =>{ e.stopPropagation(); deleteCustomer(customer.id)}}>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCustomerComponents