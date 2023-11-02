import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { BsSliders, BsChevronDown } from "react-icons/bs"; //BsSliders2
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../actions/action";

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const Navbar = () => {
  const [slider, setSlider] = useState(false);
  const dispatch = useDispatch();
  const { tickets, users } = useSelector((state) => state.dataSlice);
  const [groups, setGroups] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleGroups = (e, value) => {
    if (value) {
      setGroups(e.target.value);
      setSlider(!setSlider);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      setSlider(!setSlider);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groups === "user") {
      dispatch(
        dataSelect(
          groups,
          {
            tickets,
            users,
          },
          order
        )
      );
    } else {
      dispatch(dataSelect(groups, tickets, order));
    }
  }, [tickets, dispatch, groups, users, order]);

  return (
    <>
      <div className="navbar">
        <div className="navbarButton">
          <img
            src="https://play-lh.googleusercontent.com/f0g_tu3JSr8kmAIz-iQEOGFG7DOwe7c482IPVuA0V3K7OrgBbYCtj_hv0sB5Ub1wwoYS=w600-h300-pc0xffffff-pd"
            className="imagea"
          ></img>
          <button className="groupButton" onClick={() => setSlider(!slider)}>
            <BsSliders /> Display <BsChevronDown />
          </button>

          {slider && (
            <>
              <div className="dropDown">
                <div className="group">
                  <span style={{ color: "grey" }}>Grouping</span>
                  <select
                    value={groups}
                    onChange={(e) => handleGroups(e, true)}
                    name="group"
                    id="group"
                  >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>

                <div className="group">
                  <span style={{ color: "grey" }}>Ordering</span>
                  <select
                    value={order}
                    onChange={(e) => handleGroups(e, false)}
                    name="order"
                    id="order"
                  >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="navbar">
          {/* Rest of the code */}
          <div className="navbarButton">
            {/* Rest of the code */}
            <div className="app">
              <button
                className={isLoggedIn ? "green-button" : "red-button"}
                onClick={isLoggedIn ? handleLogout : handleLogin}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
