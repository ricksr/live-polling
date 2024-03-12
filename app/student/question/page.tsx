"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Student = () => {
  const router = useRouter();
  const [ques, setQues] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const handleSubmit = () => {
    router.push("/student/polling");
  };

  const fetchLatestQues = async () => {
    var raw = "";

    let resp = await fetch("http://localhost:3000/api/show-latest-question", {
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
  useEffect(() => {
    fetchLatestQues();
  }, []);

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
            <h3>Q. {ques}</h3>{" "}
          </span>
          <div style={{ padding: "10px" }}>
            {a} <button>-</button>
          </div>
          <div style={{ padding: "10px" }}>
            {b} <button>-</button>
          </div>
          <div style={{ padding: "10px" }}>
            {c} <button>-</button>
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
