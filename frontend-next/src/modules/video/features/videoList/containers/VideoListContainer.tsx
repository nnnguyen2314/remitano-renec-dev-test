import * as React from "react";
import useVideoListService from "@modules/video/hooks/useVideoListService";
import {Avatar, Col, List, Row, Typography} from "antd";
import {useEffect} from "react";
import VideoList from "@modules/video/features/videoList/components/VideoList";

const { Title } = Typography;

const VideoListContainer = () => {
    const { selector, handleFetchVideoList } = useVideoListService();

    useEffect(() => {
        handleFetchVideoList().then((res) => {
            console.log(selector.videoList);
        });
    }, []);

    const renderVideoItem = (item: any, index: number) => {
        console.log(item);
        return (
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <Avatar src={item?.video?.snippet?.thumbnails?.default?.url} />
                    }
                    title={<a target="_blank" href={`https://youtube.com/embed/${vid?.video?.snippet?.id}`}>{item?.video?.snippet?.title}</a>}
                    description={item?.video?.snippet?.description}
                />
            </List.Item>
        )
    };

    return (
        <div>
            <Row>
                <Col span={24}>
                    <Title level={3}>All Videos</Title>
                </Col>
            </Row>
            <Row>
                <VideoList videoList={selector.videoList} />
            </Row>
        </div>
    );
};

export default VideoListContainer;