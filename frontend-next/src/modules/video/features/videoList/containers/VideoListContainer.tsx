import * as React from "react";
import useVideoListService from "@modules/video/hooks/useVideoListService";
import {Avatar, Card, Col, List, Row, Space, Tag, Typography} from "antd";
import {useEffect} from "react";
import styled from "styled-components";
import Link from "next/link";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined} from "@ant-design/icons";

const VideoListWrapper = styled.div`
    
`;

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
        // <List
        //     header={<Typography style={{fontWeight: 'bold'}} component="h4">Video Playlist</Typography>}
        //     dataSource={selector.videoList}
        //     renderItem={renderVideoItem}
        // />
        <VideoListWrapper>
            <Row>
                <Col span={24}>
                    <Title level={3}>Video Playlists</Title>
                </Col>
            </Row>
            <Row>
                {selector.videoList.map((vid, key) => (
                    <Col span={6}>
                        <Space direction="vertical" size="small" style={{ display: 'flex', margin: '10px' }}>
                            <div>
                                <iframe
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    src={`https://youtube.com/embed/${vid?.video?.id}`}
                                    width='100%'
                                    height='200px'
                                    allowFullScreen
                                    title={vid?.video?.snippet?.title} />
                            </div>
                            <div>
                                <Link href={`https://youtube.com/embed/${vid?.video?.id}`}>
                                    <Title ellipsis={{ rows: 1, tooltip: vid?.video?.snippet?.title }} type="secondary" style={{ margin: 'auto' }} level={5}>
                                        {vid?.video?.snippet?.title}
                                    </Title>
                                </Link>
                            </div>
                            {vid?.video?.statistics && (
                                <Space size="small">
                                    <Tag color="#3b5999" icon={vid?.video?.statistics?.likeCount ? <LikeFilled color="#ffffff"/> : <LikeOutlined color="#ffffff" />}>
                                        {vid?.video?.statistics?.likeCount || ''}
                                    </Tag>
                                    <Tag icon={vid?.video?.statistics?.dislikeCount ? <DislikeFilled color="#ffffff"/> : <DislikeOutlined color="#ffffff" />}>
                                        {vid?.video?.statistics?.dislikeCount || ''}
                                    </Tag>
                                </Space>
                            )}
                        </Space>
                    </Col>
                ))}
            </Row>
        </VideoListWrapper>
    );
};

export default VideoListContainer;