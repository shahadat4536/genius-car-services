import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user, loading, error] = useAuthState(auth);
  console.log("test", user.email);
  //   const [user, setUser] = useState({
  //     name: "Akbar The Great",
  //     email: "akbar@momo.taj",
  //     address: "Tajmohol Road Md.pur",
  //     phone: "0178647452114",
  //   });

  //   const handleAddress = (event) => {
  //     console.log(event.target.value);
  //     const { address, ...rest } = user;
  //     const newAddress = event.target.value;
  //     const newUser = { address: newAddress, ...rest };
  //     setUser(newUser);
  //     console.log(address);
  //   };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user?.email,
      service: service?.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Your Order Is Booked!!");
        event.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order:{service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          value={user?.displayName}
          readOnly
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={user?.email}
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service?.name}
          placeholder="Service"
          readOnly
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
