import { useNavigate, useParams } from "react-router-dom"
import './view.css'
import { useEffect, useState } from "react"
import axios from "axios"

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
        axios.post("http://localhost:3000/cart", data)
            .then((Response) => {
                console.log(Response)
                alert("Product added to cart")
            })
            .catch((err) => console.log(err))
    }

    function buyNow() {
        navigate(`/buynow/${data.id}`)
    }

    return (
        <div className="view-page">

            <div className="view-container">

                <h1 className="view-title">
                    Product Details
                </h1>

                <div className="view-card">

                    <div className="view-image-section">
                        <img
                            className="view-product-image"
                            src={data.img}
                            width={300}
                            height={400}
                            alt=""
                        />
                    </div>

                    <div className="view-details">

                        <h2 className="view-product-name">
                            {data.productname}
                        </h2>

                        <p className="view-info">
                            📦 <span>Quantity:</span> {data.quanity}
                        </p>

                        <p className="view-price">
                            💰 <span>Price:</span> {data.price}
                        </p>

                        <div
                            className="btn-group view-buttons"
                            role="group"
                            aria-label="Product buttons"
                        >
                            <button
                                type="button"
                                className="btn btn-danger luxury-buy-btn"
                                onClick={buyNow}
                            >
                                Buy Now
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning luxury-cart-btn"
                                onClick={Cart}
                            >
                                Add to Cart
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default View