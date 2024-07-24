import React from "react";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ProductsTitle () {
    const navigate = useNavigate()
    return (
        <Stack>
            <Container>
            <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px"
                }}>
                    <GlobalParagraph fontSize="36px" fontWeight="600">Title</GlobalParagraph>
                    <Button sx={{
                        color: "rgba(255, 1, 0, 1)",
                        fontSize: "24px",
                        fontWeight: "400"
                    }} onClick={() => navigate('/all_products')}>Barchasi <KeyboardArrowRightIcon/></Button>
                </Box>
            </Container>
        </Stack>
    )
}

export default ProductsTitle