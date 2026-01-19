import { useState } from "react";

const Article = ({ posts = [] }) => {
  const [search, setSearch] = useState("");
  const handleChangesearch = (e) => {
    setSearch(e.target.value);
  };
  const filterdata = posts.filter((p) => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      cari artikel: <input type="text" onChange={handleChangesearch}  />
      <br />
      <small>
        Ditemukan {filterdata.length} data dengan pencarian kata <b>{search}</b>
      </small>
      {filterdata.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.title}</h3>
            <small>
              {post.author} - Date: {post.date}, tags{post.tags}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default Article;
