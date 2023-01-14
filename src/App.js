import { useState, useEffect, useRef } from "react";
import "./App.css";
import Playlist from "./Playlist";
import IndividualVideos from "./IndividualVideos";
import Spinner from "./Spinner";
import Download from "./Download";
import Format from "./Format";
import Result from "./Result";

function App() {
  const [isDownloadLinkAvailable, setIsDownloadLinkAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quality, setQuality] = useState("480");
  const [type, setType] = useState("video"); // ['audio','video']

  const [downloadLinks, setDownloadLinks] = useState([]);
  const [playlistName, setPlaylistName] = useState(""); // ['audios','videos','<actualName>']
  const [playlistLength, setPlaylistLength] = useState(0);
  const [isResultVisible,setIsResultVisible]=useState(false)

  return (
    <div className="App">
      <Format setQuality={setQuality} setType={setType} />
      <Playlist
        quality={quality}
        type={type}
        setIsLoading={setIsLoading}
        setIsDownloadLinkAvailable={setIsDownloadLinkAvailable}
        setDownloadLinks={setDownloadLinks}
        setPlaylistName={setPlaylistName}
        setPlaylistLength={setPlaylistLength}
        setIsResultVisible={setIsResultVisible}
      />
      <div className="OR">OR</div>
      <div className="labelIndividualVideos">
        For downloading videos separately
      </div>
      <IndividualVideos
        quality={quality}
        type={type}
        setIsLoading={setIsLoading}
        setIsDownloadLinkAvailable={setIsDownloadLinkAvailable}
        setDownloadLinks={setDownloadLinks}
        setPlaylistName={setPlaylistName}
        setIsResultVisible={setIsResultVisible}
      />
      <Spinner
        classes="center mgtop"
        visible={isLoading}
        text={"Loading"}
        type="Circles"
        color="black"
      />
      {isDownloadLinkAvailable ? (
        <Download
          type={type}
          downloadLinks={downloadLinks}
          playlistName={playlistName}
        />
      ) : (
        ""
      )}
      {playlistLength != 0 && isResultVisible ? (
        <Result playlistName={playlistName} playlistLength={playlistLength} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
