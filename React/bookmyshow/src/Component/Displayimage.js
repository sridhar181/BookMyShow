const DisplayImages = ({ data, altPrefix }) => (
    <div>
      <div className="cont3">
        {data.map((item, index) => (
          <div key={item._id} className="Lt" onclick="">
            <img src={item.image} alt={`${altPrefix} ${index + 1}`} />
          </div>
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

  export default DisplayImages;