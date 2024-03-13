"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Student = () => {
  const router = useRouter();
  const [ques, setQues] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const [ans, setAns] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [counter, setCounter] = React.useState(60);

  const handleSubmit = () => {
    if (ans == correctAns) alert("Correct answer");
    router.push("/student/polling");
  };

  const fetchLatestQues = async () => {
    var raw = "";

    let resp: any = await fetch("https://social-sturgeon-yearly.ngrok-free.app/api/show-latest-question", {
      method: "POST",
      body: raw,
      redirect: "follow",
    });
    resp = await resp.json();
    console.log("API resp", resp?.data);
    setQues(resp?.data?.latestQuestion);
    setA(resp?.data?.opt_a);
    setB(resp?.data?.opt_b);
    setC(resp?.data?.opt_c);
  };

  const fetchAnswer = async () => {
    var raw = "";

    let resp: any = await fetch("https://social-sturgeon-yearly.ngrok-free.app/api/show-answer", {
      method: "POST",
      body: raw,
      redirect: "follow",
    });
    resp = await resp.json();
    console.log("API resp", resp?.data);
    setCorrectAns(resp?.data?.correct_opt);
  };

  useEffect(() => {
    fetchLatestQues();
    fetchAnswer();
  }, []);
  useEffect(() => {
    if (counter == 0) {
      router.push("/student/polling");
    }
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
          height: "100%",
          border: "1px solid",
          padding: "25px",
          width: "50%",
          maxHeight: "50%",
          alignItems: "center",
          marginLeft: "22.5vw",
        }}
      >
        <h2>{counter}</h2>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ marginBottom: "20px" }}>
            <h3>Q. {ques}</h3>{" "}
          </span>
          <div style={{ padding: "10px" }}>
            {a} <button onClick={() => setAns("opt_a")}>-</button>
          </div>
          <div style={{ padding: "10px" }}>
            {b} <button onClick={() => setAns("opt_b")}>-</button>
          </div>
          <div style={{ padding: "10px" }}>
            {c} <button onClick={() => setAns("opt_c")}>-</button>
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
