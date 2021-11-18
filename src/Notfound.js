import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <div className="notfoundimage">
        <img
          id="notfound-img"
          src="https://cdn.pixabay.com/photo/2020/12/19/02/50/emoji-5843434_1280.png"
          alt=""
        />
      </div>

      <Link to="/" id='not-found-button'>Back to the homepage...</Link>
    </div>
  );
};

export default Notfound;
