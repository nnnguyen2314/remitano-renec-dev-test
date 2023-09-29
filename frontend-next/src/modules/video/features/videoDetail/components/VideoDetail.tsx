import React from "react";
import {Card, Col, Collapse, Row, Space, Tag, Typography} from "antd";
import styled from "styled-components";
import {CaretRightOutlined, DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined} from "@ant-design/icons";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

interface VideoDetailProps {
    videoUrl: string,
    videoInfo: object,
    sharedBy: object
}

const VideoDetail = (props: VideoDetailProps) => {
    const { videoUrl, videoInfo, sharedBy } = props;

    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24}>
                        <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            src={`https://youtube.com/embed/${videoInfo?.snippet?.id}`}
                            width='100%'
                            height='400px'
                            allowFullScreen
                            title={videoInfo?.snippet?.title} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Title level={5}>{videoInfo?.snippet?.title}</Title>
                        {sharedBy && <Typography variant="subtitle2" color="textSecondary">Shared by: {sharedBy}</Typography>}
                    </Col>
                </Row>
                {videoInfo?.statistics && (
                    <Row>
                        <Col span={24}>
                            <Space size="small">
                                <Tag color="#3b5999" icon={videoInfo?.statistics?.likeCount ? <LikeFilled color="#ffffff"/> : <LikeOutlined color="#ffffff" />}>
                                    {videoInfo?.statistics?.likeCount || ''}
                                </Tag>
                                <Tag icon={videoInfo?.statistics?.dislikeCount ? <DislikeFilled color="#ffffff"/> : <DislikeOutlined color="#ffffff" />}>
                                    {videoInfo?.statistics?.dislikeCount || ''}
                                </Tag>
                            </Space>
                        </Col>
                    </Row>
                )}
                <Row>
                    <Col span={24}>
                        <Title level={4} style={{margin: 0}}>Description</Title>
                        <Paragraph style={{textAlign: 'justify'}} ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                            {videoInfo?.snippet?.description}
                        </Paragraph>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default VideoDetail;