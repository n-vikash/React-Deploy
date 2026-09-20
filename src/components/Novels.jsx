import { novels } from "../data/data";

const Novels = () => {
  return (
    <main className="library-page">
      <div className="library-header">
        <h1>Novels</h1>
        <p>Discover novels from different genres and authors.</p>
      </div>

      <div className="library-grid">
        {novels.map((ele) => (
          <div className="library-item novel-item" key={ele.id}>
            <span className="item-type">NOVEL</span>

            <h2>{ele.title}</h2>

            <div className="item-details">
              <p>
                <span>Author</span>
                {ele.author}
              </p>

              <p>
                <span>Genre</span>
                {ele.genre}
              </p>
            </div>

            <p className="item-description">{ele.description}</p>

            <button className="book-btn">Read Novel</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Novels;
