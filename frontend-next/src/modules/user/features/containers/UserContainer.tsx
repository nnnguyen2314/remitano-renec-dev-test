import React from "react";
import useUserService from "@modules/user/hooks/useUserService";
import AccountInfo from "@modules/user/features/components/AccountInfo";
import LoginForm from "@modules/user/features/components/LoginForm";
import {Spin} from "antd";

const UserContainer: React.FC = (props: {}) => {
    const { selector, handleDoAuth, handleFetchProfile, handleDoLogout } = useUserService();

    const handleLogin = (data: any) => {
        handleDoAuth(data).then(() => {
            handleFetchProfile();
        })
    };

    return (
        <Spin spinning={selector.userState.loading}>
            {selector.userState.isAuthenticated && selector.userState.currentUser && (<AccountInfo userInfo={selector.userState.currentUser} handleDoLogout={handleDoLogout} />)}
            {!selector.userState.isAuthenticated && (
                    <LoginForm handleLogin={handleLogin} />
            )}
        </Spin>
    )
};

export default UserContainer;