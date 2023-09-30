import type { NextPage } from "next";
import RootLayout from "@modules/core/features/layout/RootLayout";
import useUserService from "@modules/user/hooks/useUserService";
import {useEffect} from "react";
import VideoListContainerWithPlaying from "@modules/video/features/videoList/containers/VideoListContainerWithPlaying";

const IndexPage: NextPage = () => {
    const { selector, handleFetchProfile } = useUserService();

    useEffect(() => {
        if(selector.userState.isAuthenticated) {
            handleFetchProfile();
        }
    }, [handleFetchProfile, selector.userState.isAuthenticated]);

    return (
        <RootLayout>
            <VideoListContainerWithPlaying />
        </RootLayout>
    );
};

export default IndexPage;