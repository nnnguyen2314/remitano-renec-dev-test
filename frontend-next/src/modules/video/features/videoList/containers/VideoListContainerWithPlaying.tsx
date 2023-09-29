import * as React from "react";
import useVideoListService from "@modules/video/hooks/useVideoListService";
import {Avatar, Col, List, Row, Typography} from "antd";
import {useEffect, useState} from "react";
import VideoList from "@modules/video/features/videoList/components/VideoList";
import VideoDetailContainer from "@modules/video/features/videoDetail/containers/VideoDetailContainer";

const { Title } = Typography;

const VideoListContainerWithPlaying = () => {
    const { selector, handleFetchVideoList } = useVideoListService();
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSelectVideo = (video) => {
        setSelectedVideo(video);
    }

    useEffect(() => {
        handleFetchVideoList().then((res) => {
            if (res?.payload?.data?.data && res?.payload?.data?.data?.length > 0) {
                setSelectedVideo(res?.payload?.data?.data[0]);
            }
        });
    }, []);

    return (
        <Row gutter={[16, 16]} style={{width: '100%', margin: '20px auto'}}>
            <Col xs={24} sm={24} md={12} lg={14}>
                <VideoDetailContainer selectedVideo={selectedVideo} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={10}>
                <VideoList handleSelectVideo={handleSelectVideo} videoList={selector.videoList} layout="list" />
            </Col>
        </Row>
    );
};

export default VideoListContainerWithPlaying;