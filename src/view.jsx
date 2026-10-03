import { useNavigate, useParams } from "react-router-dom"
import './view.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function View() {
    const { id } = useParams()
    
    const [data, setdata] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/products/"+id)
            .then((Response) => {
                setdata(Response.data)
                console.log(Response.data)
            })
            .catch((err) => console.log(err))
    }, [])
      function addToCart() {

        let oldCart = JSON.parse(localStorage.getItem("cart")) || []

        oldCart.push(data)

        localStorage.setItem("cart", JSON.stringify(oldCart))

        alert("Product Added To Cart 🛒")
    }

    return <>
        <h1>Products Details</h1>

        <div>
            <img src={data.img} width={300} height={400} alt="" />

            <h2>{data.productname}</h2>
            <p>📦 Quantity: {data.quanity}</p>
            <p>💰 Price: {data.price}</p>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger">Buy Now</button>
                <button type="button" className="btn btn-warning" onClick={addToCart}>Add to Cart</button>
            </div>
            <br />
            <br />
            <Link to="/cart">
                    <button className="btn btn-primary">
                        Go To Cart 🛒
                    </button>
                </Link>
        </div>
    </>
}
export default View