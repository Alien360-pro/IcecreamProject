import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function Buynow() {

    const { id } = useParams()

    const [data, setdata] = useState({})

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [phone, setphone] = useState("")

    // Product quantity
    const [quantity, setquantity] = useState(1)


    useEffect(() => {

        axios.get("http://localhost:3000/products/" + id)
            .then((Response) => {
                setdata(Response.data)
                console.log(Response.data)
            })
            .catch((err) => console.log(err))

    }, [id])


    // Increase quantity
    function increase() {

        setquantity(quantity + 1)

    }


    // Decrease quantity
    function decrease() {

        if (quantity > 1) {
            setquantity(quantity - 1)
        }

    }


    function generateBill() {

        if (name === "" || email === "" || address === "" || phone === "") {
            alert("Please enter Name, Email, Address and Phone Number")
            return
        }


        // Bill data
        let billData = {
            name: name,
            email: email,
            address: address,
            phone: phone,
            productname: data.productname,
            quantity: quantity,
            price: price,
            totalPrice: totalPrice
        }


        // Store bill in JSON Server
        axios.post("http://localhost:3000/bill", billData)
            .then((Response) => {
                console.log(Response.data)
                alert("Bill Generated Successfully")
            })
            .catch((err) => {
                console.log(err)
                alert("Bill Not Generated")
            })
    }


    // Default price = ₹30
    let price = 30

    // Total price
    let totalPrice = price * quantity


    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h1 className="text-center mb-4">
                    🍦 V.V.K Ice Cream
                </h1>

                <h2 className="text-center">
                    Purchase Bill
                </h2>

                <hr />


                <div className="mb-3">

                    <label className="form-label">
                        Product Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.productname || ""}
                        readOnly
                    />

                </div>


                <div className="mb-3">

                    <label className="form-label">
                        Quantity
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.quanity || ""}
                        readOnly
                    />


                    {/* Quantity buttons */}

                    <div className="mt-3 text-center">

                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={decrease}
                        >
                            −
                        </button>


                        <span className="mx-4 fs-4">
                            {quantity}
                        </span>


                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={increase}
                        >
                            +
                        </button>


                        {/* Price below buttons */}

                        <h4 className="mt-3">
                            Price: ₹{totalPrice}
                        </h4>

                    </div>

                </div>


                {/* Customer Name */}

                <div className="mb-3">

                    <label className="form-label">
                        Customer Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />

                </div>


                {/* Email */}

                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />

                </div>


                {/* Address */}

                <div className="mb-3">

                    <label className="form-label">
                        Address
                    </label>

                    <textarea
                        className="form-control"
                        placeholder="Enter your address"
                        rows="3"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                    ></textarea>

                </div>


                {/* Phone Number */}

                <div className="mb-3">

                    <label className="form-label">
                        Phone Number
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    />

                </div>


                <hr />


                <div className="text-center">

                    <h3>
                        Total Price: ₹{totalPrice}
                    </h3>

                    <button
                        className="btn btn-success mt-3"
                        onClick={generateBill}
                    >
                        Generate Bill
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Buynow
