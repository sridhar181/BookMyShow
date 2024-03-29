import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const url = "http://127.0.0.1:5001/api/auth";

const Regsiter = () => {

    let navigate = useNavigate();

    const initialValues = {
        name:'sridhar',
        email:'sridhar@gmail.com',
        password:"987654322",
        phone:"987654322"
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        console.log(values)
        fetch(`${url}/register`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/login'))
    }



    return(
        <>
            
            <div className="container">
                <hr/>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Regsiter</h3>
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <label for="fname" className='control-label'>Name</label>
                                <input className='form-control' id="fname"
                                name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="password" className='control-label'>Password</label>
                                <input className='form-control' id="password"
                                name="password" value={values.password} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="phone" className='control-label'>Phone</label>
                                <input className='form-control' id="phone"
                                name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            
                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Register
                        </button>
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default Regsiter