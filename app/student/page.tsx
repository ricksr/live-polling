"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Student = () => {
  const router = useRouter()
  const handleContinue = () => {
    router.push('/student/question')
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
          maxHeight: "50%",
          alignItems: "center",
          marginLeft: "22.5vw",
        }}
      >
        <input
          style={{
            width: "50%",
            height: "40px",
            backgroundColor: "white",
            padding: "15px",
            color: "black",
          }}
          placeholder="Enter your name"
        />
        <button style={{ width: "15%", height: "40px", padding: "5px", background: "white", color: "black" }} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Student;
