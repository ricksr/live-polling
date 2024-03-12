"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Teacher = () => {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [opt_a, setOpt_a] = useState("");
  const [opt_b, setOpt_b] = useState("");
  const [opt_c, setOpt_c] = useState("");
  const [correct_opt, setCorrect_opt] = useState("");

  function getRandomNumber() {
    return String(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
  }

  const handleAskQuestion = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let queid = getRandomNumber();
    let optid = getRandomNumber();

    var raw = JSON.stringify({
      question: {
        string: question,
        id: queid,
        option_id: optid,
      },
      options: {
        question_id: queid,
        id: optid,
        opt_a: opt_a,
        opt_b: opt_b,
        opt_c: opt_c,
        correct_opt: correct_opt,
      },
    });

    let a = await fetch("http://localhost:3000/api/submit-question", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });
    console.log("api resp ", a);
    router.push("/teacher/polling");
  };

  const handleQuesInput = (event: any) => {
    console.log("event", event.target.value);
    setQuestion(event.target.value);
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
        <div>
          <div>
            <h3>Enter Questions and options</h3>
          </div>
          <input
            type="text"
            placeholder="Enter..."
            style={{
              background: "white",
              color: "black",
              width: "40vw",
              height: "10vh",
              padding: "15px",
            }}
            onChange={handleQuesInput}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "20vh",
          }}
        >
          <div>
            <h4>Enter and press the correct options</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* opta */}
            <input
              type="text"
              style={{ background: "white", color: "black", padding: "5px" }}
              onChange={(event) => setOpt_a(event?.target.value)}
            />{" "}
            <button
              style={{ padding: "5px", background: "white", color: "black" }}
              onClick={(event) => setCorrect_opt("opt_a")}
            >
              -{" "}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* optb */}
            <input
              type="text"
              style={{ background: "white", color: "black", padding: "5px" }}
              onChange={(event) => setOpt_b(event?.target.value)}
            />{" "}
            <button
              style={{ padding: "5px", background: "white", color: "black" }}
              onClick={(event) => setCorrect_opt("opt_b")}
            >
              -{" "}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* optc */}
            <input
              type="text"
              style={{ background: "white", color: "black", padding: "5px" }}
              onChange={(event) => setOpt_c(event?.target.value)}
            />{" "}
            <button
              style={{ padding: "5px", background: "white", color: "black" }}
              onClick={(event) => setCorrect_opt("opt_c")}
            >
              -{" "}
            </button>
          </div>
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
            <button
              style={{
                width: "max-content",
                padding: "10px",
                background: "white",
                color: "black",
              }}
              onClick={handleAskQuestion}
            >
              Ask Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
