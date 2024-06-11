import { Stack } from "@mui/material";
import React from "react";
import { AboutUs, BrandsComponent, ProductsComponent, ProductsTitle } from "../../components";

function Home () {
    return (
        <Stack>
            <BrandsComponent/>
            <ProductsTitle/>
            <ProductsComponent/>
            <AboutUs/>
        </Stack>
    )
}
export default Home