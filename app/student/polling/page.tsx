"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Teacher = () => {
  const router = useRouter();

  const handleAnotherQuestion = () => {
    router.push("/teacher");
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "30vh",
            width: "40vw",
          }}
        >
          <div>
            <h4>Polling Results</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                background: "white",
                color: "black",
                padding: "5px",
                border: "1px solid",
                width: "30vw",
              }}
            >
              {" "}
              15
            </div>
            <div
              style={{
                padding: "5px",
                background: "white",
                color: "black",
                border: "1px solid",
              }}
            >
              50%{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                background: "white",
                color: "black",
                padding: "5px",
                border: "1px solid",
                width: "30vw",
              }}
            >
              {" "}
              20
            </div>
            <div
              style={{
                padding: "5px",
                background: "white",
                color: "black",
                border: "1px solid",
              }}
            >
              50%{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                background: "white",
                color: "black",
                padding: "5px",
                border: "1px solid",
                width: "30vw",
              }}
            >
              {" "}
              30
            </div>
            <div
              style={{
                padding: "5px",
                background: "white",
                color: "black",
                border: "1px solid",
              }}
            >
              50%{" "}
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "35vw",
            }}
          >
            {/* <button
              style={{
                width: "max-content",
                padding: "10px",
                background: "white",
                color: "black",
              }}
              onClick={handleAnotherQuestion}
            >
              Ask another question
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
