"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Teacher = () => {
  const [ques, setQues] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [counter, setCounter] = React.useState(5000);

  const router = useRouter();
  let opt_a: any = localStorage.getItem("opt_a");
  let opt_b: any = localStorage.getItem("opt_b");
  let opt_c: any = localStorage.getItem("opt_c");
  let all = Number(opt_a) + Number(opt_b) + Number(opt_c);

  const handleAnotherQuestion = () => {
    router.push("/teacher");
  };

  const fetchLatestQues = async () => {
    var raw = "";

    let resp: any = await fetch(
      "https://social-sturgeon-yearly.ngrok-free.app/api/show-latest-question",
      {
        method: "POST",
        body: raw,
        redirect: "follow",
      }
    );
    resp = await resp.json();
    console.log("API resp", resp?.data);
    setQues(resp?.data?.latestQuestion);
    setA(resp?.data?.opt_a);
    setB(resp?.data?.opt_b);
    setC(resp?.data?.opt_c);
  };

  useEffect(() => {
    fetchLatestQues();
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

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
          <i>Q. {ques}</i>
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
              {a}
            </div>
            <div
              style={{
                padding: "5px",
                background: "white",
                color: "black",
                border: "1px solid",
              }}
            >
              {((opt_a / all) * 100).toFixed(2)}{" "}
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
              {b}
            </div>
            <div
              style={{
                padding: "5px",
                background: "white",
                color: "black",
                border: "1px solid",
              }}
            >
              {((opt_b / all) * 100).toFixed(2)}{" "}
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
              {c}
            </div>
            <div
              style={{
                padding: "5px",
                background: "white",
                color: "black",
                border: "1px solid",
              }}
            >
              {((opt_c / all) * 100).toFixed(2)}{" "}
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
