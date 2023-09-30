import {NextPage} from "next";
import RootLayout from "@modules/core/features/layout/RootLayout";
import VideoSharingContainer from "@modules/video/features/videoSharing/containers/VideoSharingContainer";
import useUserService from "@modules/user/hooks/useUserService";
import {useEffect} from "react";
import {useRouter} from "next/router";

const VideoSharePage: NextPage = () => {
    const { selector, handleFetchProfile } = useUserService();
    const router = useRouter();

    useEffect(() => {
        if(selector.userState.isAuthenticated) {
            handleFetchProfile();
        } else {
            router.push('/');
        }
    }, [selector.userState.isAuthenticated, handleFetchProfile, router]);
    return (
        <RootLayout>
            <VideoSharingContainer />
        </RootLayout>
    );
};

export default VideoSharePage;