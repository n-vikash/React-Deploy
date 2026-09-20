import { papers } from "../data/data";

const PreviousPapers = () => {
  return (
    <main className="library-page">
      <div className="library-header">
        <h1>Previous Papers</h1>
        <p>Explore previous academic research papers.</p>
      </div>

      <div className="library-grid">
        {papers.map((ele) => (
          <div className="library-item paper-item" key={ele.id}>
            <span className="item-type">RESEARCH PAPER</span>

            <h2>{ele.title}</h2>

            <div className="item-details">
              <p>
                <span>Author</span>
                {ele.author}
              </p>

              <p>
                <span>Year</span>
                {ele.year}
              </p>

              <p>
                <span>Subject</span>
                {ele.subject}
              </p>
            </div>

            <p className="item-description">{ele.description}</p>

            <button className="book-btn">Read Paper</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PreviousPapers;
