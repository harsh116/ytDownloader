import "./Result.css";

const Result = (props) => {
  return (
    <div className="Result">
      <h3>{props.playlistName}</h3>
      <p>
        {props.playlistLength ? props.playlistLength : 0} videos found in
        playlist
      </p>
    </div>
  );
};

export default Result;
