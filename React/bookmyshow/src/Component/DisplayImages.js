import { useNavigate } from "react-router-dom";

const DisplayImages = ({ path, data, altPrefix }) => {
  console.log("Display Images page", data, altPrefix, path);
  const navigate = useNavigate();
  const navigateToPage = (movie_id) => {
    console.log("movie_id in DisplayImages", movie_id);
    navigate(`${path}/${movie_id}`);
  };

  return (
    <div>
      <div className="cont3">
        {data.map((item, index) => (
          <button
            key={item._id}
            className="Lt"
            onClick={() => navigateToPage(item.id)}
          >
            <img src={item.image} alt={`${altPrefix} ${index + 1}`} />
          </button>
        ))}
      </div>
      <div className="cont6">
        {data.map((item, index) => (
          <div key={item._id} className="cont6txt">
            <div className="cont6txt1">
              <span>{item.name}</span>
            </div>
            <div className="cont6txt2">
              <span>{item.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayImages;
