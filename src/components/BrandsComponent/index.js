import { Box, Stack } from "@mui/material";
import React from "react";
import { Container } from "../../global_styles/styles";
import apple from '../../media/images/apple.png'
import lg from '../../media/images/lg.png'
import samsung from '../../media/images/samsung.png'
import artel from '../../media/images/artel.png'
function BrandsComponent () {
    return (
        <Stack sx={{
            marginTop: "30px"
        }}>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        width: "250px",
                        height: "150px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={apple} alt="brand" />
                    </Box>
                    <Box sx={{
                        width: "250px",
                        height: "150px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={samsung} alt="brand" />
                    </Box>
                    <Box sx={{
                        width: "250px",
                        height: "150px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={lg} alt="brand" />
                    </Box>
                    <Box sx={{
                        width: "250px",
                        height: "150px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={artel} alt="brand" />
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}
export default BrandsComponent