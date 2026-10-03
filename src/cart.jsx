
import { useEffect, useState } from "react"

function Cart() {

    const [cart, setCart] = useState([])
    useEffect(() => {
        let oldCart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(oldCart)
    }, [])

    return (
        <>
            <h1>My Cart 🛒</h1>
            <div className="container">
                {cart.length === 0 ? (
                    <h3>Your Cart is Empty</h3>
                ) : (
                    <div className="row">
                        {cart.map((item, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card p-3">
                                    <img
                                        src={item.img}
                                        className="card-img-top"
                                        height="300"
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {item.productname}
                                        </h3>
                                        <p>
                                            📦 Quantity: {item.quanity}
                                        </p>
                                        <p>
                                            💰 Price: {item.price}
                                        </p>

                                  </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
export default Cart