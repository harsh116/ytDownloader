import "./Format.css";

const Format = (props) => {
  const { setQuality, setType,setSide } = props;

  const handleChange = (e) => {
    setSide('left')
    const format = e.target.value;
    const index = e.target.selectedIndex;
    if (index < 3) {
      setType("video");
      setQuality(format);
    } else {
      setType("audio");
      setQuality("128")
    }
  };

  return (
    <div className="Format">
      <label htmlFor="">Format: </label>
      <select onChange={handleChange} name="Format" id="">
        <optgroup label="Video">
          {/*<option value="144">144p</option>*/}
          {/*<option value="240">240p</option>*/}
          <option selected value="360">360p</option>
          {/*<option  value="480">*/}
            {/*480p*/}
          {/*</option>*/}
          <option value="720">720p(recommended)</option>
            <option value="720c">720p(for copyright)</option>
          {/*<option value="1080">1080p</option>*/}
        </optgroup>
        <optgroup label="Audio">
          <option value="mp3">128kbps</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Format;
