import * as React from "react";
import {Col} from "antd";
import VideoListItem from "./VideoListItem";

interface VideoListProps {
    videoList: [];
}

const VideoList: React.FC<VideoListProps> = (props: VideoListProps) => {
    const {videoList} = props;

    return videoList.map((vid, key) => (
        <Col span={6}>
            <VideoListItem videoData={vid} />
        </Col>
    ));
};

export default VideoList;