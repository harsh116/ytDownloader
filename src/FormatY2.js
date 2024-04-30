// import "./Format.css";
import './FormatY2.css'

const FormatY2 = (props) => {
  const { setQuality, setType,setSide } = props;

  const handleChange = (e) => {
    setSide('right')
    const format = e.target.value;
    const index = e.target.selectedIndex;
    if (index < 6) {
      setType("video");
      setQuality(format);
    } else {
      setType("audio");
      setQuality('128y')
    }
  };

  return (
    <div className="FormatY2">

      <label htmlFor="">Format: </label>
      <select onChange={handleChange} name="Format" id="">
        <optgroup label="Video(y2mate)">
          <option value="144y">144p</option>
          <option value="240y">240p</option>
          <option selected value="360y">360p</option>
          <option  value="480y">
            480p
          </option>
          <option value="720y">720p</option>
            
          <option value="1080y">1080p</option>
        </optgroup>
        <optgroup label="Audio(y2mate)">
          <option value="mp3">128kbps</option>
        </optgroup>
      </select>
      <div style={{'font-size': '0.5rem', 'text-align': 
    'center'}}>From other sources</div>
    </div>
  );
};

export default FormatY2;
