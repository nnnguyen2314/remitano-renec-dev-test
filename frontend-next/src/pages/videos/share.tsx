import {NextPage} from "next";
import RootLayout from "@modules/core/layout/RootLayout";
import {Home} from "@modules/home";

const VideoSharePage: NextPage = () => {
    return (
        <RootLayout>
            <Home />
        </RootLayout>
    );
};

export default VideoSharePage;