import React from "react";
import DirectoryMenu from "../../components/directory/directory";
import {HomePageContainer} from "./homepage-styles";
function HomePage() {
    return <HomePageContainer>
        <DirectoryMenu />
    </HomePageContainer>;
}

export default HomePage;