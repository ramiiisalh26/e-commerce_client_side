import React, { useEffect, useState } from 'react'
import { createCustomer, getCustomerById, updateCustomer } from '../../services/CustomerServices';
import { useNavigate, useParams } from 'react-router-dom';

function Customer() {

    const navigator = useNavigate();
    const {id} = useParams();

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address,setAddress] = useState([
        {
            street_address: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        }
    ]);

    const [errors,setErrors] = useState({
        first_name: '',
        last_name: '',
        username: '',
        phone_number: '',
        date_of_birth: '',
        gender: '',
        address: {
            street_address: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        }
    })

    const handleAddress = (e) => {
        const {name, value} = e.target;
        setAddress({
            ...address,
            [name]: value
        })
        // console.log(address)
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors};

        if(first_name.trim()){
            errorsCopy.first_name = '';
        }else{
            errorsCopy.first_name = "First name is required";
            valid = false;
        }

        if(last_name.trim()){
            errorsCopy.last_name = '';
        }else{
            errorsCopy.last_name = "Last name is required";
            valid = false;
        }

        if(username.trim()){
            errorsCopy.username = '';
        }else{
            errorsCopy.username = "Email is required";
            valid = false;
        }

        if(phone_number.trim()){
            errorsCopy.phone_number = '';
        }else{
            errorsCopy.phone_number = "Phone number is required";
            valid = false;
        }

        if(date_of_birth.trim()){
            errorsCopy.date_of_birth = '';
        }else{
            errorsCopy.date_of_birth = "Date of birth is required";
            valid = false;
        }

        if(gender.trim()){
            errorsCopy.gender = '';
        }else{
            errorsCopy.gender = "Gender is required";
            valid = false;
        }

        if(address.street_address.trim()){
            errorsCopy.address.street_address = '';
        }else{
            errorsCopy.address.street_address = "Street address is required";
            valid = false;
        }

        if(address.city.trim()){
            errorsCopy.address.city = '';
        }else{
            errorsCopy.address.city = "City is required";
            valid = false;
        }

        if(address.state.trim()){
            errorsCopy.address.state = '';
        }else{
            errorsCopy.address.state = "State is required";
            valid = false;
        }

        if(address.zip.trim()){
            errorsCopy.address.zip = '';
        }else{
            errorsCopy.address.zip = "Zip is required";
            valid = false;
        }

        if(address.country.trim()){
            errorsCopy.address.country = '';
        }else{
            errorsCopy.address.country = "Country is required";
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function saveOrUpdateCustomer(e){
        e.preventDefault();  

        if(validateForm()){
            const customer = {
                first_name,
                last_name,
                username,
                phone_number,
                address: [{
                    street_address: address.street_address,
                    city: address.city,
                    state: address.state,
                    zip: address.zip,
                    country: address.country
                }],
                date_of_birth,
                gender
            };
            if(id){
                updateCustomer(customer,id).then((response) => {
                    console.log(customer)
                    navigator('/customer/all');
                }).catch((error) => {
                    console.log(error);
                })
            }else{
                createCustomer(customer).then((response)=>{
                    console.log(response.data);
                    navigator('/customer/all');
                }).catch((error) => {
                    console.log(error);
                })
            }
            
        }
        
    }

    useEffect(() =>{
        if(id){
            getCustomerById(id).then((respose) => {
                setFirstName(respose.data.first_name)
                setLastName(respose.data.last_name)
                setUsername(respose.data.username)
                setPhoneNumber(respose.data.phone_number)
                setAddress({
                    street_address: respose.data.address[0].street_address,
                    city: respose.data.address[0].city,
                    state: respose.data.address[0].state,
                    zip: respose.data.address[0].zip,
                    country: respose.data.address[0].country 
                })
                setDateOfBirth(respose.data.date_of_birth)
                setGender(respose.data.gender)
            }).catch(error => {
                console.log(error);
            })
        }
    },[id])

    function pageTitle(){
        if(id){
            return <h2 className='text-center mt-3'>Update Customer</h2>
        }else{
            return <h2 className='text-center mt-3'>Add Customer</h2>
        }
    }

  return (
    <div className='container'>
        <div className="row mt-5">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {pageTitle()}
                <div className="card-body">
                    <form action="">
                        <div className="form-group mb-2">
                            <label className='form-label'>First Name:</label>
                            <input 
                                type="text"
                                placeholder='First Name'
                                name='firstName'
                                value={first_name || ''}
                                className={`form-control ${errors.first_name ? 'is-invalid': ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.first_name && <div className='invalid-feedback'> {errors.first_name} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Last Name:</label>
                            <input 
                                type="text"
                                placeholder='Last Name'
                                name='lastName'
                                value={last_name || ''}
                                className={`form-control ${errors.last_name ? 'is-invalid': ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.last_name && <div className='invalid-feedback'> {errors.last_name} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>E-mail:</label>
                            <input 
                                type="text"
                                placeholder='Email'
                                name='email'
                                value={username || ''}
                                className={`form-control ${errors.username ? 'is-invalid': ''}`}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <div className='invalid-feedback'> {errors.username} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Phone Number:</label>
                            <input 
                                type="text"
                                placeholder='Phone Number'
                                name='Phone_number'
                                value={phone_number || ''}
                                className={`form-control ${errors.phone_number ? 'is-invalid': ''}`}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            {errors.phone_number && <div className='invalid-feedback'> {errors.phone_number} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Street Address:</label>
                            <input 
                                type="text"
                                placeholder='Street Address'
                                name='street_address'
                                value={address.street_address || ''}
                                className={`form-control ${errors.address.street_address ? 'is-invalid': ''}`}
                                onChange={handleAddress}
                            />
                            {errors.address.street_address && <div className='invalid-feedback'> {errors.address.street_address} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>City:</label>
                            <input 
                                type="text"
                                placeholder='City'
                                name='city'
                                value={address.city || ''}
                                className={`form-control ${errors.address.city ? 'is-invalid': ''}`}
                                onChange={handleAddress}
                            />
                            {errors.address.city && <div className='invalid-feedback'> {errors.address.city} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>State:</label>
                            <input 
                                type="text"
                                placeholder='State'
                                name='state'
                                value={address.state || ''}
                                className={`form-control ${errors.address.state ? 'is-invalid': ''}`}
                                onChange={handleAddress}
                            />
                            {errors.address.state && <div className='invalid-feedback'> {errors.address.state} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Zip:</label>
                            <input 
                                type="text"
                                placeholder='Zip'
                                name='zip'
                                value={address.zip || ''}
                                className={`form-control ${errors.address.zip ? 'is-invalid': ''}`}
                                onChange={handleAddress}
                            />
                            {errors.address.zip && <div className='invalid-feedback'> {errors.address.zip} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Country:</label>
                            <input 
                                type="text"
                                placeholder='Country'
                                name='country'
                                value={address.country || ''}
                                className={`form-control ${errors.address.country ? 'is-invalid': ''}`}
                                onChange={handleAddress}
                            />
                            {errors.address.country && <div className='invalid-feedback'> {errors.address.country} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Date Of Birth:</label>
                            <input 
                                type="date"
                                placeholder='date Of birth'
                                name='date_of_birth'
                                value={date_of_birth || ''}
                                className={`form-control ${errors.date_of_birth ? 'is-invalid': ''}`}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                            {errors.date_of_birth && <div className='invalid-feedback'> {errors.date_of_birth} </div>}
                        </div>
                        <div className="form-group mb-2">
                            <label >Gender:</label>
                            <select className={`form-select ${errors.gender ? 'is-invalid': ''}`} value={gender || ''} onChange={(e) => setGender(e.target.value)}>
                                <option value="">Select Gender Type:</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.gender && <div className='invalid-feedback'> {errors.gender} </div>}
                        </div>
                        <button className='btn btn-success mt-3' onClick={saveOrUpdateCustomer}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer