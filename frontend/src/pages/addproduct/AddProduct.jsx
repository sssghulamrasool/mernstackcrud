import React from "react";
import { useState } from "react";

const AddProduct = ({ popUp }) => {
  const [prouct, setProduct] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    city: "",
  });

  let value, name;
  const onChangeHandler = (event) => {
    name = event.target.name;
    value = event.target.value;
    setProduct({ ...prouct, [name]: value });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/usersPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prouct),
    });
    setProduct({
      name: "",
      email: "",
      phoneno: "",
      address: "",
      city: "",
    });
  };
  return (
    <>
      <div className="add--popup--overlay "></div>
      <div className="add--popup ">
        <form onSubmit={handelSubmit}>
          <div className="close--popup" onClick={() => popUp()}>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <h4 className="titlebar">new upload data</h4>
          <div className="add--popup--group">
            <label htmlFor=""> Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={prouct.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="add--popup--group">
            <label htmlFor=""> Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={prouct.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="add--popup--group">
            <label htmlFor=""> Phone no</label>
            <input
              type="number"
              placeholder="Number"
              name="phoneno"
              value={prouct.phoneno}
              onChange={onChangeHandler}
            />
          </div>
          <div className="add--popup--group">
            <label htmlFor=""> address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={prouct.address}
              onChange={onChangeHandler}
            />
          </div>
          <div className="add--popup--group">
            <label htmlFor=""> city</label>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={prouct.city}
              onChange={onChangeHandler}
            />
          </div>
          <div className="add--popup--group">
            <input
              type="submit"
              value="add new "
              className="add--new--popup--btn"
            />
          </div>
        </form>
      </div>{" "}
    </>
  );
};

export default AddProduct;
