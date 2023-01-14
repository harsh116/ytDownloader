import "./Download.css";

const Download = (props) => {
  const { downloadLinks, playlistName, type } = props;

  const promiseSetTimeOut = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  const mainDownload = async (url) => {
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    // document.body.append(a);

    // a.click();
    a.dispatchEvent(new MouseEvent("click", { ctrlKey: true }));
    // document.body.remove("a");
    // window.open(url, "_blank").blur();
    if (type === "audio") {
      await promiseSetTimeOut(3000);
    } else {
      await promiseSetTimeOut(10000);
    }
  };

  const download = async () => {
    if (playlistName === "videos") {
      for (let link of downloadLinks) {
        await mainDownload(link.videoURL);
      }
    } else if (playlistName === "audios") {
      for (let link of downloadLinks) {
        await mainDownload(link.audioURL);
      }
    } else {
      for (let link of downloadLinks) {
        await mainDownload(link.downURL);
      }
    }
  };

  return (
    <div className="Download">
      <button onClick={download}>Download</button>
    </div>
  );
};

export default Download;
