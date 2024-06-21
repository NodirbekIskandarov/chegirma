import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { GlobalParagraph } from "../../global_styles/styles";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import product_image from '../../media/images/productimage.png'
import chat from '../../media/images/Chat.png'
function DeatilComments() {
    return (
        <Stack>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid gray"
            }}>
                <GlobalParagraph fontSize="36px" fontWeight="500" style={{ color: "rgba(255, 1, 0, 1)" }}>Sharhlar</GlobalParagraph>
                <Link to='/' style={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(30, 30, 30, 0.6)",
                    fontSize: "24px",
                    fontWeight: "400",
                    textDecoration: "none"
                }}>BARCHASI <ChevronRightIcon /></Link>
            </Box>

            <Box sx={{ width: "100%" }}>
                <Box sx={{ width: "100%" }}>
                    <GlobalParagraph fontSize="36px" fontWeight="500">Name</GlobalParagraph>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Rating value={5} disabled size="large" sx={{ color: "rgba(255, 215, 0, 1)" }} />
                        <GlobalParagraph fontSize="30px" fontWeight="500">05.04.2024</GlobalParagraph>
                    </Box>
                    <Typography>           Телефон в синем цвете просто шикарен. очень лёгкий, но в тоже время огромный экран. Брал для Мамы, и то, что экран большой очень кстати. камера снимает хорошо, брал 6/128 . Считаю это оптимальным сочетанием цены и качества. Покупкой очень доволен и всем рекомендую. Спасибо всей команде Узум за их кропотливую работу.
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "20px"
                    }}>
                        <img src={product_image} alt="product"/>
                        <img src={product_image} alt="product"/>
                        <img src={product_image} alt="product"/>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%"
                    }}>
                        <Button sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "rgba(30, 30, 30, 0.6)",
                            textTransform: "none"
                        }}>
                            <img src={chat} alt="chat" style={{
                                marginRight: "10px"
                            }}/>
                            Sotuvchi javobini ko'rish
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Stack>
    )
}
export default DeatilComments