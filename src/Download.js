import "./Download.css";
import {HOST,sendMediaHOST} from './constants'

const Download = (props) => {
  const { downloadLinks, playlistName, type } = props;

  const promiseSetTimeOut = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve();
      }, time);
    });
  };

  const mainDownload = async (url,title,extension,quality) => {

    console.log('qualityN: ',Number(quality))
    console.log('qualityS: ',(quality))

   
      if(extension=='mp4' && quality==='360'|| extension==='mp3'&&quality==='128'){
         try{
      const res=  await fetch(`${sendMediaHOST}/sendMedia`, {
    method: "post",
    cors: "cors",
    headers: {
      "content-type": "application/json",
      // accept: "Application/octet-stream",
    },
    body: JSON.stringify({ url }),
  })
    // .then((res) => res.blob())
    const blob=await res.blob()
    // .then((blob) => {
      // const blob = new Blob(data);

      console.log("blob: ", blob);
      const durl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `${title}.${extension}`
      link.href = durl;
      console.log(link);
      link.click();
    }
    catch(err){
      console.log('err: ',err)
    }

    
    // })
    


    return
    }


    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.setAttribute('download', 'any.mp4')
    // document.body.append(a);

    a.click()
    ;
    // a.dispatchEvent(new MouseEvent("click", { ctrlKey: true }));
    // const newTab = window.open(url, "_blank");
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
        await mainDownload(link.videoURL,link.title,"mp4",link.quality);
      }
    } else if (playlistName === "audios") {
      for (let link of downloadLinks) {
        await mainDownload(link.audioURL,link.title,"mp3",link.quality);
      }
    } else {
      for (let link of downloadLinks) {
        await mainDownload(link.downURL,link.title,link.type,link.quality);
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
