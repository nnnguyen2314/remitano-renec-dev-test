import * as React from "react";
import styled from "styled-components";
import {Avatar, Card} from "antd";
import {DislikeOutlined, LikeOutlined} from '@ant-design/icons';

const { Meta } = Card;

const StyledCard = styled(Card)`
  background-color: transparent;
  width: 100%;
  margin-bottom: 15px;
`;

interface VideoListItemProps {
    video: object;
}

const VideoListItem: React.FC<VideoListItemProps> = ({ video }) => {
    const {} = video;

    return (
        <StyledCard
            actions={[
                <LikeOutlined key="like" />,
                <DislikeOutlined key="dislike" />
            ]}
        >

        </StyledCard>
    );
};

export default VideoListItem;