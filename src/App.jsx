import Article from "./components/Article/Article";
import posts from "./post.json";
import Counter from "./Counter/Counter";
import Lifecycle from "./Lifecycle/Lifecycle";

function App() {
  return (
    <>
      <Article posts={posts} />
      <h3>Top Author</h3>
      <ol>
        {posts.map((post, index) => {
          return <li key={index}>{post.author}</li>;
        })}
      </ol>
      <button onClick={() => alert("Hello World")}>Click Me!</button>
      <Lifecycle />
      <Counter />
    </>
  );
}

export default App;
