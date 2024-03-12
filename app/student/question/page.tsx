"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Student = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/student/polling");
  };

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
          height: "100%",
          border: "1px solid",
          padding: "25px",
          width: "50%",
          maxHeight: "50%",
          alignItems: "center",
          marginLeft: "22.5vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ marginBottom: "20px" }}>
            <h3>Q. Some random question</h3>{" "}
          </span>
          <div style={{ padding: "10px" }}>
            fsdfsdfsdfsf <button>-</button>
          </div>
          <div style={{ padding: "10px" }}>
            fsdfsdfsdfsf <button>-</button>
          </div>
          <div style={{ padding: "10px" }}>
            fsdfsdfsdfsf <button>-</button>
          </div>
        </div>
        <div style={{ margin: "20px" }}>
          <button
            style={{ background: "white", color: "black", padding: "10px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
