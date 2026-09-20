import { materials } from "../data/data";

const Materials = () => {
  return (
    <main className="library-page">
      <div className="library-header">
        <h1>Study Materials</h1>
        <p>Find useful resources for your studies.</p>
      </div>

      <div className="library-grid">
        {materials.map((ele) => (
          <div className="library-item material-item" key={ele.id}>
            <span className="item-type">STUDY MATERIAL</span>

            <h2>{ele.title}</h2>

            <div className="item-details">
              <p>
                <span>Author</span>
                {ele.author}
              </p>

              <p>
                <span>Category</span>
                {ele.category}
              </p>
            </div>

            <p className="item-description">{ele.description}</p>

            <button className="book-btn">Open Material</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Materials;
