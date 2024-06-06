import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Menu () {
    const menuData = [
        {
            name: "Barcha chegirmalar",
            link: '/'
        },
        {
            name: "Telefon va gadjetlar",
            link: '/'
        },
        {
            name: "Maishiy texnika",
            link: '/'
        },
        {
            name: "Kitoblar",
            link: '/'
        },
        {
            name: "Televizorlar",
            link: '/'
        },
        {
            name: "Yangiliklar",
            link: '/'
        },
        {
            name: "Kompyuterlar",
            link: '/'
        }
    ]
    return (
        <Stack width="100%">
            <Box width="100%" sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {
                    menuData && menuData.map((item, index) => {
                        return (
                            <Link key={index} to={item.link} style={{
                                textDecoration: "none",
                                color: "black",
                                cursor: "pointer"
                            }}>{item.name}</Link>
                        )
                    })
                }
                
            </Box>
        </Stack>
    )
}
export default Menu