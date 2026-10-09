import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import './products.css'

function Products() {
    const [set, setvalue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((Response) => {
                console.log(Response.data)
                setvalue(Response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h1 className="products-title">Products</h1>

            <div className="container text-center products-container">
                <div
                    className="row products-row"
                    style={{ rowGap: "80px", columnGap: "60px" }}
                >
                    {set.map((r) => {
                        return (
                            <div key={r.id} className="col-md-3 product-column">
                                <div
                                    className="card product-card"
                                    style={{
                                        width: "18rem",
                                        height: "480px",
                                        objectFit: "contain",
                                        padding: "15px"
                                    }}
                                >
                                    <img
                                        src={r.img}
                                        width={200}
                                        height={300}
                                        className="card-img-top product-image"
                                    />

                                    <div className="card-body product-body">
                                        <h3 className="product-name">
                                            {r.productname}
                                        </h3>

                                        <h5 className="product-quantity">
                                            {r.quanity}
                                        </h5>

                                        <Link
                                            to={`/prod1/${r.id}`}
                                            className="btn btn-primary product-button"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            
        </>
    )
}

export default Products