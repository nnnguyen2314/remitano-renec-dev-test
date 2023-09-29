import React, {useEffect, useState} from "react";
import VideoDetail from "@modules/video/features/videoDetail/components/VideoDetail";
import useVideoDetailService from "@modules/video/hooks/useVideoDetailService";
import {Spin} from "antd";

interface VideoDetailContainerProps {
    selectedVideo: object;
}

const VideoDetailContainer = (props: VideoDetailContainerProps) => {
    const { selectedVideo } = props;
    const { handleFetchVideoInfoFromYoutube } = useVideoDetailService();
    const [videoInfo, setVideoInfo] = useState({});

    useEffect(() => {
        if (selectedVideo) {
            handleFetchVideoInfoFromYoutube(selectedVideo?.videoUrl)
                .then((res) => {
                    setVideoInfo({...selectedVideo, ...{video: res?.video.info}});
                });
        }

    }, [selectedVideo]);

    return (
        <Spin spinning={!videoInfo}>
            <VideoDetail videoInfo={videoInfo} />
        </Spin>
    );
};

export default VideoDetailContainer;