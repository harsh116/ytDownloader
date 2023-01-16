import { useState } from "react";
import "./Playlist.css";
import { HOST, TIMEOUT, TIME_INTERVAL } from "./constants";
import axios from "axios";

import { promiseSetTimeOut } from "./helper";

const Playlist = (props) => {
  const axiosInstance = axios.create({
    baseURL: HOST,
    timeout: TIMEOUT,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    },
  });

  const {
    quality,
    type,
    setIsLoading,
    setIsDownloadLinkAvailable,
    setDownloadLinks,
    setPlaylistName,
    setPlaylistLength,
    setIsResultVisible,
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
    setIsResultVisible(false);
    setIsDownloadLinkAvailable(false);

    // axiosInstance
    //   .post("/getList", { playlistURL: input1, quality, type })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => console.log);

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
      .then(async (data) => {
        console.log(data);
        while (true) {
          await promiseSetTimeOut(TIME_INTERVAL);
          const res = await fetch(`${HOST}/getResponseState`);
          const mainData = await res.json();
          // .then((res) => res.json())
          // .then((mainData) => {
          console.log("mainData ", mainData);
          if (mainData.state === false) {
            await promiseSetTimeOut(10000);
            continue;
          }
          setIsResultVisible(true);
          console.log(mainData);
          setIsLoading(false);
          const { videoList, playListName, audioList } = mainData.data?.[0];
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
          break;
        }
      })
      .catch((err) => {
        setDownloadLinks([]);
        setPlaylistName("");
        setPlaylistLength(0);
        console.log(err);
        setIsResultVisible(false);
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
