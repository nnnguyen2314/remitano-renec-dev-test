import React, {useEffect, useState} from "react";
import VideoDetail from "@modules/video/features/videoDetail/components/VideoDetail";
import useVideoDetailService from "@modules/video/hooks/useVideoDetailService";

const VideoDetailContainer = (videoUrl: string) => {
    const [videoInfo, setVideoInfo] = useState({});
    const { handleFetchVideoInfoFromYoutube } = useVideoDetailService();

    useEffect(() => {
        handleFetchVideoInfoFromYoutube(videoUrl)
            .then((res) => {
                setVideoInfo(res?.video);
            });

    }, [videoUrl]);

    return <VideoDetail videoUrl={videoUrl} videoInfo={videoInfo} />;
};

export default VideoDetailContainer;