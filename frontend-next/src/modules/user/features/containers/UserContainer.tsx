import React from "react";
import useUserService from "@modules/user/hooks/useUserService";
import AccountInfo from "@modules/user/features/components/AccountInfo";
import LoginForm from "@modules/user/features/components/LoginForm";
import {Spin} from "antd";

const UserContainer = () => {
    const { selector, handleDoAuth, handleFetchProfile, handleDoLogout } = useUserService();

    const handleLogin = (data: any) => {
        handleDoAuth(data).then(() => {
            handleFetchProfile();
        })
    };

    const render = () => {

        if (selector?.userState?.isAuthenticated) {
            return <AccountInfo userInfo={selector.userState.currentUser} handleDoLogout={handleDoLogout} />;
        }

        return <LoginForm handleLogin={handleLogin} />;
    };

    return (
        <div>
            <Spin spinning={selector.userState.loading}>
                {render()}
            </Spin>
        </div>
    )
};

export default UserContainer;