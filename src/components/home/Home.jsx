import React from "react";
import "./home.css";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

export default function Home() {
  return (
    <div>
      <div className="home">
        <Leftbar />
        <Rightbar />
      </div>
    </div>
  );
}
