import React from "react";
import styled from 'styled-components';
import {Button, Space, Typography} from "antd";

const AccountInfoWrapper = styled(Space)`
`;

const { Text, Link } = Typography;

interface AccountInfoPropType {
    userInfo: Object,
    handleDoLogout: any
}

const AccountInfo: React.FC<AccountInfoPropType> = (props: AccountInfoPropType) => {
    const { userInfo, handleDoLogout } = props;

    return (
        <AccountInfoWrapper align="center" size="middle">
            <div className="user-info">
                <Space align="center" size="small">
                    <Text>Hello,</Text>
                    <Text>{userInfo?.email}</Text>
                </Space>
            </div>
            <div className="user-actions">
                <Space align="center" size="small">
                    <Link type="primary" href="/videos/share">Share Video</Link>
                    <Button type="primary" onClick={handleDoLogout}>Logout</Button>
                </Space>
            </div>
        </AccountInfoWrapper>
    );
};

export default AccountInfo;