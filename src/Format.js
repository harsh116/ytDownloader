import "./Format.css";

const Format = (props) => {
  const { setQuality, setType } = props;

  const handleChange = (e) => {
    const format = e.target.value;
    const index = e.target.selectedIndex;
    if (index < 6) {
      setType("video");
      setQuality(format);
    } else {
      setType("audio");
    }
  };

  return (
    <div className="Format">
      <label htmlFor="">Format: </label>
      <select onChange={handleChange} name="Format" id="">
        <optgroup label="Video">
          <option value="144">144p</option>
          <option value="240">240p</option>
          <option value="360">360p</option>
          <option selected value="480">
            480p
          </option>
          <option value="720">720p</option>
          <option value="1080">1080p</option>
        </optgroup>
        <optgroup label="Audio">
          <option value="mp3">128kbps</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Format;
