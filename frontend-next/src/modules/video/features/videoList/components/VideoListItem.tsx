import * as React from "react";
import styled from "styled-components";
import {Avatar, Card, Space, Tag, Typography} from "antd";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined} from '@ant-design/icons';
import Link from "next/link";

const { Title } = Typography;

interface VideoListItemProps {
    videoData: object;
}

const VideoListItem: React.FC<VideoListItemProps> = (props: VideoListItemProps) => {
    const {videoData} = props;

    return (
        <Space direction="vertical" size="small" style={{ display: 'flex', margin: '10px' }}>
            <div>
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    src={`https://youtube.com/embed/${videoData?.video?.id}`}
                    width='100%'
                    height='200px'
                    allowFullScreen
                    title={videoData?.video?.snippet?.title} />
            </div>
            <div>
                <Link href={`https://youtube.com/embed/${videoData?.video?.id}`}>
                    <Title ellipsis={{ rows: 1, tooltip: videoData?.video?.snippet?.title }} type="secondary" style={{ margin: 'auto' }} level={5}>
                        {videoData?.video?.snippet?.title}
                    </Title>
                </Link>
            </div>
            {videoData?.video?.statistics && (
                <Space size="small">
                    <Tag color="#3b5999" icon={videoData?.video?.statistics?.likeCount ? <LikeFilled color="#ffffff"/> : <LikeOutlined color="#ffffff" />}>
                        {videoData?.video?.statistics?.likeCount || ''}
                    </Tag>
                    <Tag icon={videoData?.video?.statistics?.dislikeCount ? <DislikeFilled color="#ffffff"/> : <DislikeOutlined color="#ffffff" />}>
                        {videoData?.video?.statistics?.dislikeCount || ''}
                    </Tag>
                </Space>
            )}
        </Space>
    );
};

export default VideoListItem;