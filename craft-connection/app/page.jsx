import Post from "./components/Post";
import React from "react";
export default function Home() {
  return (
    <>
      <div className = "feed" style = {{ display: 'flex', justifyContent: 'center' }}>
        <Post/>
      </div>
    </>
  );
}
