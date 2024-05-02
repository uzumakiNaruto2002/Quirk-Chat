import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute, sendMessageRoute, setStatusRoute } from "../utils/APIRoutes";
import StatusContext from "../context/statusContext";


export default function Logout() {
  const navigate = useNavigate();
  const {status, setStatus} = useContext(StatusContext)

  const handleClick = async () => {
    const token = localStorage.getItem('token');
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      setStatus("Busy")
      const st = "Busy";
      await axios.post(setStatusRoute, {
        id: data._id,
        status: st,
      },{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
      localStorage.clear();
      navigate("/login");
    }
  };
 
  const handleStatus = async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    const token = localStorage.getItem('token');
    if (status === "Available") {
      setStatus("Busy");
      const st = "Busy";
      await axios.post(setStatusRoute, {
        id: data._id,
        status: st,
      },{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    } else {
      setStatus("Available");
      const st = "Available";
      await axios.post(setStatusRoute, {
        id: data._id,
        status: st,
      },{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    }
    // console.log(status);
  };

  return (
    <>
      {/* <div className="mb-5">
  <Button className="mr-5" onClick={handleStatus}>{status}</Button>
  <Button onClick={handleClick} className="btn-power-off">
    <BiPowerOff />
  </Button>
</div> */}

<div class="button-container">
  <button class="status-button" onClick={handleStatus}>{status}</button>
  <button class="power-off-button" onClick={handleClick}>
    <BiPowerOff />
  </button>
</div>



    </>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #A90BD4;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;