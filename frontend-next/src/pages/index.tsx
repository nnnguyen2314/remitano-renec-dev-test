import type { NextPage } from "next";
import RootLayout from "@modules/core/features/layout/RootLayout";
import useUserService from "@modules/user/hooks/useUserService";
import {useEffect} from "react";
import {useAppDispatch} from "@modules/core/hooks";
import VideoListContainer from "@modules/video/features/videoList/containers/VideoListContainer";

const IndexPage: NextPage = () => {
    const dispatch = useAppDispatch();
    const { selector, handleFetchProfile } = useUserService();

    useEffect(() => {
        if(selector.userState.isAuthenticated) {
            handleFetchProfile();
        }
    }, []);

    return (
        <RootLayout>
            <VideoListContainer />
        </RootLayout>
    );
};

export default IndexPage;