import * as React from "react";
import Image from "next/image";
import VideoListContainer from "@modules/video/features/videoList/containers/VideoListContainer";

export const Home: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <VideoListContainer />
        </main>
    );
};