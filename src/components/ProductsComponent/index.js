import { Box, Rating, Stack } from "@mui/material";
import React from "react";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import product from '../../media/images/product.png'
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import { ProductCallButton, ProductSendButton } from "./styles";
import MailIcon from '@mui/icons-material/Mail';
import callicon from '../../media/images/callicon.png'
function ProductsComponent () {
    const [value, setValue] = React.useState(2);
    return (
        <Stack sx={{
            margin: "20px 0"
        }}>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        width: "23%",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "10px"
                    }}>
                        <img src={product} alt="mahsulot" width="100%"/>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <GlobalParagraph fontSize="14px" fontWeight="500">AirPods Pro Lux</GlobalParagraph>
                            <FavoriteBorderIcon />
                        </Box>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <del style={{
                                fontSize: "16px",
                                fontWeight: "400"
                            }}>500 000 so'm</del>
                            <EastIcon/>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <GlobalParagraph fontSize="14px" fontWeight="600" style={{marginRight: "5px", color: "rgba(255, 1, 0, 1)"}}>250 000</GlobalParagraph>
                                <span>so'm</span>
                            </Box>
                            
                        </Box>
                        <Box>
                            <Link to="/" style={{
                                color: "black",
                                fontSize: "16px",
                                fontWeight: "500"
                            }}>Apple.uz</Link>
                        </Box>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Rating name="read-only" value={value} readOnly />
                            <GlobalParagraph fontSize="14px" fontWeight="400">2ta sharh</GlobalParagraph>
                        </Box>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <ProductSendButton><img src="" alt=""/><MailIcon/>Xabar yuborish</ProductSendButton>
                            <ProductCallButton><img src={callicon} alt="call icon"/></ProductCallButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}
export default ProductsComponent