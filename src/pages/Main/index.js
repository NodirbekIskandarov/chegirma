import React from "react";
import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../global_styles/styles";
function Main() {
    return (
        <Wrapper height="100vh">
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    )
}
export default Main