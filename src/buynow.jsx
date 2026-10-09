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

    // State to track form validation errors
    const [errors, setErrors] = useState({})


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

        let newErrors = {}

        // Name Validation
        if (name.trim() === "") {
            newErrors.name = "You Must Fill The Details"
        }

        // Email Validation
        if (email.trim() === "") {
            newErrors.email = "You Must Fill The Details"
        } else if (!email.includes("@")) {
            newErrors.email = "Email must contain '@' symbol"
        }

        // Address Validation
        if (address.trim() === "") {
            newErrors.address = "You Must Fill The Details"
        }

        // Phone Validation
        if (phone.trim() === "") {
            newErrors.phone = "You Must Fill The Details"
        } else if (phone.length !== 10) {
            newErrors.phone = "Phone number must be exactly 10 digits"
        }

        // Set the error messages
        setErrors(newErrors)

        // Stop execution if there are any errors
        if (Object.keys(newErrors).length > 0) {
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


    return <>
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
                        onChange={(e) => {
                            setname(e.target.value)
                            if (e.target.value.trim() !== "") {
                                setErrors((prev) => ({ ...prev, name: "" }))
                            }
                        }}
                    />

                    {errors.name && (
                        <small className="text-danger fw-bold mt-1 d-block">
                            {errors.name}
                        </small>
                    )}

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
                        onChange={(e) => {
                            setemail(e.target.value)

                            // Clear error instantly as soon as user types anything
                            if (e.target.value.trim() !== "") {
                                setErrors((prev) => ({ ...prev, email: "" }))
                            }
                        }}
                    />

                    {errors.email && (
                        <small className="text-danger fw-bold mt-1 d-block">
                            {errors.email}
                        </small>
                    )}

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
                        onChange={(e) => {
                            setaddress(e.target.value)
                            if (e.target.value.trim() !== "") {
                                setErrors((prev) => ({ ...prev, address: "" }))
                            }
                        }}
                    ></textarea>

                    {errors.address && (
                        <small className="text-danger fw-bold mt-1 d-block">
                            {errors.address}
                        </small>
                    )}

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
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                            // Only allow digits and restrict length to maximum 10 digits
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10)
                            setphone(val)

                            // Clear error instantly as soon as user types anything
                            if (val.trim() !== "") {
                                setErrors((prev) => ({ ...prev, phone: "" }))
                            }
                        }}
                    />

                    {errors.phone && (
                        <small className="text-danger fw-bold mt-1 d-block">
                            {errors.phone}
                        </small>
                    )}

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
    </>
}

export default Buynow