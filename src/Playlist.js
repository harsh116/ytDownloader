import { useState } from "react";
import "./Playlist.css";
import { HOST } from "./constants";

const Playlist = (props) => {
  const {
    quality,
    type,
    setIsLoading,
    setIsDownloadLinkAvailable,
    setDownloadLinks,
    setPlaylistName,
    setPlaylistLength,
    setIsResultVisible
  } = props;

  const [input, setInput] = useState("");

  const generateLink = () => {
    const regex = /http[s]?[:]\/\/www\.youtube\.com\/playlist[?]list[=].+/;
    const regexM = /http[s]?[:]\/\/m\.youtube\.com\/playlist[?]list[=].+/;
    if (!regex.test(input) && !regexM.test(input)) {
      alert("Invalid playlist link");
      return;
    }

    let input1 = input;
    if (regexM.test(input)) {
      input1 = input.replace("m", "www");
    }

    setIsLoading(true);
    setIsResultVisible(false)
    setIsDownloadLinkAvailable(false);
    fetch(`${HOST}/getList`, {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        playlistURL: input1,
        quality,
        type,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsResultVisible(true)
        console.log(data);
        setIsLoading(false);
        const { videoList, playListName, audioList } = data?.[0];
        if (videoList) {
          setDownloadLinks(videoList);
          setPlaylistLength(videoList.length);
          setPlaylistName(playListName);
          setIsDownloadLinkAvailable(true);
        } else if (audioList) {
          setDownloadLinks(audioList);
          setPlaylistLength(audioList.length);
          setPlaylistName(playListName);
          setIsDownloadLinkAvailable(true);

        }
      })
      .catch((err) => {
        setDownloadLinks([]);
        setPlaylistName("");
        setPlaylistLength(0);
        console.log(err);
        setIsResultVisible(false)
        setIsLoading(false);
        alert("some error");
      });
  };

  const isInputDisabled = () => {
    if (input.length >= 4 && input.substr(0, 4) === "http") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="Playlist">
      <div className="playlistInput">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="inputLink"
          type="text"
          placeholder="Insert the url of youtube playlist"
        />
        <button
          className={`${isInputDisabled() ? "disabled" : ""}`}
          onClick={isInputDisabled() ? () => {} : generateLink}
        >
          Generate Link
        </button>
      </div>
    </div>
  );
};

export default Playlist;