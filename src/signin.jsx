import axios from "axios"
import { useState } from "react"

function Signin() {
    let [data, setdata] = useState({
        name: "",
        phone: "",
        email: ""
    })
    let [name, setname] = useState(false)
    let [cond1, setcond1] = useState(false)
    let [phone, setphone] = useState(false)
    let [email, setemail] = useState(false)
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
        if (data.name != "" && data.phone != "" && data.email != "" ) {
            setcond1(true)
        } else {
            setcond1(false)
        }
    }
    let set1 = ()=>{
        axios.post("http://localhost:3000/signin" , data)
        .then((Response)=> {console.log(Response.data)
            setdata({
                name: "",
                phone: "",
                email: ""
            })
            setsumbit("Sumbit Succesfully")
            setInterval(() => {
                setsumbit("")
            }, 2000);
        })
        .catch((err)=>console.log(err))
    }

    return <div>
        <h1>SignIn From</h1>
        Name:- <input type="text" name="name" value={data.name} onChange={set} />
        <p style={{ color: "red" }}>{name && "Please Fill The Details"}</p>
        <br />
        Phone:- <input type="number" name="phone" value={data.phone} onChange={set} />
        <p style={{ color: "red" }}>{phone && "Please Fill The Details"}</p>
        <br />
        Email:- <input type="email" name="email" value={data.email} onChange={set} />
        <p style={{ color: "red" }}>{email && "Please Fill The Details"}</p>
        <br />
        <button onClick={chech}>Sumbit</button>
        <div style={{ visibility: cond1 ? "visible" : "hidden" }}>
            <h2>Your Details</h2>
            <button onClick={set1}>Sumbit</button>
            <br />
            {sumbit}
        </div>
    </div>
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