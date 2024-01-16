import React from 'react';
import "./Display.css";
const Display = (props) => {
    const { orderData, amount ,name} = props;
    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.movie_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>Rs.{item.amount}</td>
                        <td>{item.phone}</td>

                    </tr>
                )
            })
        }
    }

        return(
            <div className="container1p">
                <center><h2>Orders</h2></center>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Oname</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cost</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData(props)}
                    </tbody>
                </table>
        
       
            </div>
        )

}

export default Display;