import React from 'react';
import { Layout, Typography } from 'antd';
import {HomeOutlined} from "@ant-design/icons";
import styled, { css } from 'styled-components';

const { Header, Content } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledLayoutHeader = styled(Header)`
  color: #000;
  background-color: #ededed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  height: auto;
  
  .branding {
    display: flex;
    align-items: center;
    width: 50%;
    
    .branding-logo {
      display: flex;
      font-size: 50px;
    }

    .branding-name {
      display: flex;
      margin-left: 20px;
    }
  }
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-flow: row;
  height: auto;
`;

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <StyledLayout>
            <StyledLayoutHeader>
                <div className="branding">
                    <div className="branding-logo">
                        <HomeOutlined />
                    </div>
                    <div className="branding-name">
                        <Title level={2}>Funny Movies</Title>
                    </div>
                </div>
                <div className="user-info">
                    User
                </div>
            </StyledLayoutHeader>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledLayout>
    );
};

export default RootLayout;