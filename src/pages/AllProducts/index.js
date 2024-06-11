import { Box, Stack } from "@mui/material";
import React from "react";
import { AllProductsComponent } from "../../components";
import { Container, GlobalParagraph } from "../../global_styles/styles";

function AllProducts () {
    return (
        <Stack>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px"
                }}>
                    <GlobalParagraph fontSize="36px" fontWeight="600">Title</GlobalParagraph>
                </Box>
            </Container>
            <AllProductsComponent/>
        </Stack>
    )
}
export default AllProducts