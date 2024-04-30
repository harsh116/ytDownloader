import { useState } from "react";
import "./IndividualVideos.css";
import { HOST } from "./constants";

const IndividualVideos = (props) => {
  const {
    quality,
    type,
    setIsLoading,
    setIsDownloadLinkAvailable,
    setDownloadLinks,
    setPlaylistName,
    setIsResultVisible
  } = props;

  const [input, setInput] = useState("");

  const generateLink = () => {
    const regex = /http[s]?[:]\/\/www\.youtube\.com\/watch[?]v[=].+/;
    const regexM = /http[s]?[:]\/\/m\.youtube\.com\/watch[?]v[=].+/;
    if (!regex.test(input) && !regexM.test(input)) {
      alert("Invalid video link");
      return;
    }

    // if (!regex.test(input) && !regexM.test(input)) {
    //   alert("Invalid playlist link");
    //   return;
    // }

    let input1 = input;
    if (regexM.test(input)) {
      input1 = input.replace("m", "www");
    }

    setIsLoading(true);
    setIsResultVisible(false)
    setIsDownloadLinkAvailable(false);
    fetch(`${HOST}/getIndividualList`, {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        urls: input1,
        quality,
        type,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        if (data.length > 0) {
          setDownloadLinks(data);
          setPlaylistName(data[0].playListName);
          setIsDownloadLinkAvailable(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setDownloadLinks([]);
        setPlaylistName("");
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
    <div className="IndividualVideos">
      <div className="videosInput">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="inputLink"
          type="text"
          placeholder="Insert video links separated by commas"
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

export default IndividualVideos;
