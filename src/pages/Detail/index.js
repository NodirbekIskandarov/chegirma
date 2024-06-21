import { Box, Stack } from "@mui/material";
import React from "react";
import { AboutProduct, DeatilComments, DetailCarousel, DetailWriteComments, ProductDescription, RecommendProducts } from "../../components";
import { Container } from "../../global_styles/styles";

function Detail() {
    return (
        <Stack>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Box width="40%">
                        <DetailCarousel />
                    </Box>
                    <Box sx={{
                        width: "60%",
                        padding: "15px"
                    }}>
                        <AboutProduct />
                    </Box>
                </Box>
                <ProductDescription/>
                <DeatilComments/>
                <Box sx={{
                    width: "100%",
                    borderBottom: "1px solid gray",
                    marginTop: "30px"
                }}></Box>
                <DetailWriteComments/>
                <RecommendProducts/>
                bu yerda mahsulotlar karusel ichida bo'lishi kk
            </Container>
        </Stack>
    )
}
export default Detail