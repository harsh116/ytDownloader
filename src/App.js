import { useState, useEffect, useRef } from "react";
import "./App.css";
import Playlist from "./Playlist";
import IndividualVideos from "./IndividualVideos";
import Spinner from "./Spinner";
import Download from "./Download";
import Format from "./Format";
import FormatY2 from "./FormatY2";
import Header from './Header'

import Result from "./Result";

function App() {
  const [isDownloadLinkAvailable, setIsDownloadLinkAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quality, setQuality] = useState("360"); // ['360','720','128','128y','144y','240y','360y','480y','720y','1080y']
  const [type, setType] = useState("video"); // ['audio','video']
  const [side,setSide]=useState('left'); //['left','right']

  const [downloadLinks, setDownloadLinks] = useState([]);
  const [playlistName, setPlaylistName] = useState(""); // ['audios','videos','<actualName>']
  const [playlistLength, setPlaylistLength] = useState(0);
  const [isResultVisible,setIsResultVisible]=useState(false)

  return (
    <div className="App">
      <Header side={side} setQuality={setQuality} setType={setType} setSide={setSide}/>
     {/* <Format setQuality={setQuality} setType={setType} setSide={setSide}/>
      <FormatY2 setQuality={setQuality} setType={setType} setSide={setSide}/>*/}
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
