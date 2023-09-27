import type { NextPage } from "next";
import { Home } from "@modules/home";
import RootLayout from "@modules/core/layout/RootLayout";

const IndexPage: NextPage = () => {
    return (
        <RootLayout>
            <Home />
        </RootLayout>
    );
};

export default IndexPage;