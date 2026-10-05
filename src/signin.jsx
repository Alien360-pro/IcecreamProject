import axios from "axios"
import { useState } from "react"
import './signin.css'

function Signin() {
    let [data, setdata] = useState({
        name: "",
        phone: "",
        email: "",
        address:""
    })
    let [name, setname] = useState(false)
    let [cond1, setcond1] = useState(false)
    let [phone, setphone] = useState(false)
    let [email, setemail] = useState(false)
    let [address, setaddress] = useState(false)
    let [sumbit ,setsumbit] = useState("")
    let set = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
          if (event.target.name == "name") {
            setname(false)
        }
        if (event.target.name == "phone") {
            setphone(false)
        }
        if (event.target.name == "email") {
            setemail(false)
        }
        if (event.target.name == "address") {
            setaddress(false)
        }
    }
    function chech() {
        if (data.name == "" ) {
            setname(true)
        } else {
            setname(false)
        }
        if(data.phone == ""){
            setphone(true)
        }else{
            setphone(false)
        }
        if(data.email == ""){
            setemail(true)
        }else{
            setemail(false)
        }
        if(data.address == ""){
            setaddress(true)
        }else{
            setaddress(false)
        }
        if (data.name != "" && 
            data.phone != "" && 
            data.email != "" && 
            data.address != "" ) {
                axios.post("http://localhost:3000/signin" , data)
        .then((Response)=> {console.log(Response.data)
            setdata({
                name: "",
                phone: "",
                email: "",
                address:""
            })
            setsumbit("Sumbit Succesfully")
            setInterval(() => {
                setsumbit("")
            }, 2000);
        })
        .catch((err)=>console.log(err))
            setcond1(true)
        } else {
            setcond1(false)
        }

        
    }
  

    return <>

             <div className="signin-page">

            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-7 col-lg-6">

                        <div className="signin-card">

                            <div className="signin-header">
                                <h1 className="text-center">
                                    SignIn Form
                                </h1>
                                <p className="text-center">
                                    Welcome to V.V.K Ice Cream
                                </p>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={set}
                                    className="form-control"
                                    placeholder="Enter your name"
                                />

                                <p className="error-message">
                                    {name && "Please Fill The Details"}
                                </p>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={data.phone}
                                    onChange={set}
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                />

                                <p className="error-message">
                                    {phone && "Please Fill The Details"}
                                </p>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={set}
                                    className="form-control"
                                    placeholder="Enter your email"
                                />

                                <p className="error-message">
                                    {email && "Please Fill The Details"}
                                </p>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Address
                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={set}
                                    className="form-control"
                                    placeholder="Enter your address"
                                />

                                <p className="error-message">
                                    {address && "Please Fill The Details"}
                                </p>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={chech}
                                    className="btn btn-warning submit-btn"
                                >
                                    Sumbit
                                </button>
                            </div>

                            {sumbit && (
                                <div className="alert alert-success success-message">
                                    {sumbit}
                                </div>
                            )}

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </>
     
}
export default Signin

//  "signin": [
//     {
//       "id": "1",
//       "name": "san",
//       "phone": "7708673419",
//       "email": "santhosh@gamil.com"
//     },
//     {
//       "name": "Jeyaseelan ",
//       "phone": "09360266807",
//       "email": "sjeyaseelansanjay@gmail.com",
//       "id": "s0EkCkjtdCM"
//     }
//   ],