"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (val: any) => {
    router.push(`/${val}`);
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
          alignItems: "center",
          backgroundColor: "#FFF",
          borderRadius: "10px",
          justifyContent: "center",
          height: "50vh",
          width: "50vw",
          marginLeft: "22.5vw",
          border: "1px solid",
          // marginTop: "15vh",
        }}
      >
        <div>
          {" "}
          <h3>Select What type of User you are</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            padding: "50px",
          }}
        >
          <div
            style={{ border: "1px solid", padding: "25px" }}
            onClick={() => handleClick("student")}
          >
            <h4>Student</h4>
          </div>
          <div
            style={{ border: "1px solid", padding: "25px" }}
            onClick={() => handleClick("teacher")}
          >
            <h4>Teacher</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
