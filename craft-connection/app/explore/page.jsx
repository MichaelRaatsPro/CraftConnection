//File path: src/app/page.js
import Post from "../components/Post"
export default function Page() {
    return (
      <>
      <div className = "explorePage" style = {{display: "flex", justifyContent: "space-between"}}>
        <Post/>
        <Post/>
        <Post/>
        </div>
      </>
    )
  }