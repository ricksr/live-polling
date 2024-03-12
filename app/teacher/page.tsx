
"use client"

import { useRouter } from "next/navigation";
import React from "react";

const Teacher = () => {
  const router = useRouter();

  const handleAskQuestion = () => {
    router.push('/teacher/polling')
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        padding: "50px",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          border: "1px solid",
          padding: "25px",
          width: "50%",
          maxHeight: "70%",
          alignItems: "center",
          marginLeft: "22.5vw",
        }}
      >
        <div>
          <div><h3>Enter Questions and options</h3></div>
          <input type="text" placeholder="Enter..." style={{background: "white", color: "black", width: "40vw", height: "10vh", padding: "15px"}} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: '20vh'
          }}
        >
          <div><h4>Enter and press the correct options</h4></div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}><input type="text" style={{background: "white", color: "black", padding: "5px"}} /> <button style={{padding: '5px', background: "white", color: "black"}}>- </button></div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}><input type="text" style={{background: "white", color: "black", padding: "5px"}} /> <button style={{padding: '5px', background: "white", color: "black"}}>- </button></div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}><input type="text" style={{background: "white", color: "black", padding: "5px"}} /> <button style={{padding: '5px', background: "white", color: "black"}}>- </button></div>
          
        </div>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "60vw",
              
            }}
          >
            {/* <button style={{width: "max-content", padding: "10px", background: "white", color: "black"}}>Add another option</button> */}
            <button style={{width: "max-content", padding: "10px", background: "white", color: "black"}} onClick={handleAskQuestion}>Ask Question</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
