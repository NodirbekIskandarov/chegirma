import { Stack } from "@mui/material";
import React from "react";
import { AboutUs, BrandsComponent, Carousel, ProductsComponent } from "../../components";

function Home () {
    return (
        <Stack>
            <Carousel/>
            <BrandsComponent/>
            <ProductsComponent/>
            <AboutUs/>
        </Stack>
    )
}
export default Home