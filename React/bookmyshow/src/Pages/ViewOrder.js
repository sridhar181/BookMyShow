import React,{useEffect, useState} from 'react';
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';


const baseUrl = "http://localhost:9121";

const ViewOrder = () => {
    const [orders,setOrder] = useState();
    const location = useLocation();
    const amount = location.state.amount;
    const name=location.state.name;
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    useEffect(() => {
    
        axios.get(`${baseUrl}/orders?email=${data.email}`).then((res) => {console.log(res.data)
            setOrder(res.data)})
    })

    return(
        <>
            <DisplayOrder orderData={orders} amount={amount} name={name}/>
        </>
    )
}

export default ViewOrder;