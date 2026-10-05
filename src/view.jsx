import { useNavigate, useParams } from "react-router-dom"
import './view.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function View() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [data, setdata] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id)
            .then((Response) => {
                setdata(Response.data)
                console.log(Response.data)
            })
            .catch((err) => console.log(err))
    }, [])
    function Cart() {
        axios.post("http://localhost:3000/cart" , data)
        .then((Response)=>{console.log(Response)
            alert("Product added to cart")
        })
        .catch((err)=>console.log(err))


    }

      function buyNow() {

        navigate(`/buynow/${data.id}`)

    }


    return <>
        <h1>Products Details</h1>

        <div>
            <img src={data.img} width={300} height={400} alt="" />

            <h2>{data.productname}</h2>
            <p>📦 Quantity: {data.quanity}</p>
            <p>💰 Price: {data.price}</p>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <Link to="/buynow" onClick={buyNow}  className="btn btn-danger">Buy Now</Link>
                <button type="button" className="btn btn-warning" onClick={Cart}>Add to Cart</button>
            </div>
            <br />
            <br />

        </div>
    </>
}
export default View