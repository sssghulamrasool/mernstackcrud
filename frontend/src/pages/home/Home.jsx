import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { ContextUsed } from "../../context/reducer/reducer";
import AddProduct from "../addproduct/AddProduct";
const Home = () => {
  const data = useContext(ContextUsed);
  const [listOfUser, setListOfUser] = useState([]);
  const popUp = () => {
    data.dispatch({
      type: "ADDPRODUCT",
    });
  };
  const getAllUserData = () => {
    fetch("http://localhost:8080/usersGet")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListOfUser(data);
      });
  };
  useEffect(() => {
    getAllUserData();
  }, [data.state.addProduct]);

  const hanldeDelete = (id) => {
    fetch(`http://localhost:8080/usersUpdate/${id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then((data) => {
        getAllUserData();
        return data;
      });
  };
  return (
    <>
      <div className="container">
        <header className="row nav">
          <a className="logo" href="/">
            student
          </a>
          <div className="add--new--user">
            <button className="add--new--user--btn" onClick={popUp}>
              add new user
            </button>
          </div>
        </header>
        <div className="row">
          <div className="colum">
            <table>
              <thead>
                <tr>
                  <th>sr</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone no</th>
                  <th>city</th>
                  <th>address</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {listOfUser?.map((element, index) => {
                  return (
                    <tr key={element._id}>
                      <td> {index + 1}</td>
                      <td> {element.username}</td>
                      <td> {element.useremail}</td>
                      <td> {element.userphoneno}</td>
                      <td> {element.usercity}</td>
                      <td> {element.useraddress}</td>
                      <td>
                        <Link
                          className="btn update"
                          to={`/update/${element._id}`}
                        >
                          update
                        </Link>
                        <Link
                          className="btn delete"
                          onClick={() => hanldeDelete(element._id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <footer>
          <p>student @copyright 2020</p>
        </footer>
        {data.state.addProduct && <AddProduct popUp={popUp} />}
      </div>
    </>
  );
};

export default Home;
