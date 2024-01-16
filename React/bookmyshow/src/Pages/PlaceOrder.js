import React,{useState} from 'react';
import { useParams,useNavigate,useLocation} from 'react-router-dom';
import "./Booking.css";

const baseUrl = "http://localhost:9121";

const PlaceOrder = () => {
    let params = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const movieName = location.state.movieName;
  const movieImage = location.state.movieImage;
  const bookedSeats = location.state.bookedSeats;
  const selectedDate = location.state.selectedDate;
  const selectedTime = location.state.selectedTime;
  const selectedLanguage = location.state.selectedLanguage;
  const theatreName = location.state.theatreName;
  const amount = location.state.amount;

    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    const initialValues = {
        id:Math.floor(Math.random() * 1000000),
        movie_name: movieName,
        name:data.name,
        email:data.email,
        amount:amount,
        phone:data.phone,
        address:"Hon 12 sec 34"
    }

    const [values,setValues] = useState(initialValues);

    const hanldeInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        console.log(values)
        fetch(`${baseUrl}/PlaceOrder`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/viewOrder',{
            state: {
              
              movieImage: movieImage,
              movieName: movieName,
              bookedSeats:bookedSeats,
              selectedDate:selectedDate,
              selectedTime:selectedTime,
              selectedLanguage:selectedLanguage,
              theatreName:theatreName,
              amount:amount,
               // Add theatre name to the state
            },
          }))
    }

    return(
        <>
            
            <div className="container1p">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order For {movieName}</h3>
                    </div>
                    <div className='panel-body'>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname"
                                name="name" value={values.name} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" value={values.email} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="phone" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" value={values.phone} onChange={hanldeInputChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="address" className="control-label">Address</label>
                                <input className="form-control" id="address"
                                name="address" value={values.address} onChange={hanldeInputChange}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <h2>Total Price is Rs. {amount}</h2>
                            </div>
                        </div>
                        <button className='btn btn-success' onClick={checkout}>
                                Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default PlaceOrder