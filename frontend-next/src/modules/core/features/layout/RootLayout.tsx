import React from 'react';
import { Layout, Typography } from 'antd';
import {HomeFilled, HomeOutlined} from "@ant-design/icons";
import styled from 'styled-components';
import UserContainer from "@modules/user/features/containers/UserContainer";
import Link from "next/link";

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
  padding: 0 50px;
  width: 100%;
`;

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <StyledLayout>
            <StyledLayoutHeader>
                <div className="branding">
                    <div className="branding-logo">
                        <Link href="/">
                            <HomeFilled style={{color: "#2db7f5"}} />
                        </Link>
                    </div>
                    <div className="branding-name">
                        <Title style={{color: "#FF165C"}} level={2}>Funny Movies</Title>
                    </div>
                </div>
                <div className="user-info">
                    <UserContainer />
                </div>
            </StyledLayoutHeader>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledLayout>
    );
};

export default RootLayout;