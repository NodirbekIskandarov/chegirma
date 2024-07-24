import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Container } from "../../global_styles/styles";
import { Link } from "react-router-dom";

function Category() {
    const data = [
        {
            main_menu: "Kiyim va aksessuarlar",
            categories: [
                {
                    name: "Erkaklar Kiyimlari 1",
                    menus: ["Erkaklar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Ko'ylaklar", "Sviterlar", "Futbolkalar", "Polo", "Shortiklar"]
                },
                {
                    name: "Ayollar Kiyimlari",
                    menus: ["Ayollar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Sviterlar", "Yupkalar", "Mo'ynali buyumlar"]
                },
                {
                    name: "Bolalar Kiyimlari",
                    menus: ["Shimlar", "Ustki kiyimlar", "Shortiklar", "Futbolkalar"]
                }
            ]
        },
        {
            main_menu: "Kiyim va aksessuarlar",
            categories: [
                {
                    name: "Erkaklar Kiyimlari 2",
                    menus: ["Erkaklar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Ko'ylaklar", "Sviterlar", "Futbolkalar", "Polo", "Shortiklar"]
                },
                {
                    name: "Ayollar Kiyimlari",
                    menus: ["Ayollar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Sviterlar", "Yupkalar", "Mo'ynali buyumlar"]
                },
                {
                    name: "Bolalar Kiyimlari",
                    menus: ["Shimlar", "Ustki kiyimlar", "Shortiklar", "Futbolkalar"]
                }
            ]
        },
        {
            main_menu: "Kiyim va aksessuarlar",
            categories: [
                {
                    name: "Erkaklar Kiyimlari 3",
                    menus: ["Erkaklar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Ko'ylaklar", "Sviterlar", "Futbolkalar", "Polo", "Shortiklar"]
                },
                {
                    name: "Ayollar Kiyimlari",
                    menus: ["Ayollar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Sviterlar", "Yupkalar", "Mo'ynali buyumlar"]
                },
                {
                    name: "Bolalar Kiyimlari",
                    menus: ["Shimlar", "Ustki kiyimlar", "Shortiklar", "Futbolkalar"]
                }
            ]
        },
        {
            main_menu: "Kiyim va aksessuarlar",
            categories: [
                {
                    name: "Erkaklar Kiyimlari 4",
                    menus: ["Erkaklar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Ko'ylaklar", "Sviterlar", "Futbolkalar", "Polo", "Shortiklar"]
                },
                {
                    name: "Ayollar Kiyimlari",
                    menus: ["Ayollar shimlari", "Ustki kiyimlar", "Jinsi", "Sport kiyimlari", "Kostyumlar", "Uy uchun kiyimlar", "Sviterlar", "Yupkalar", "Mo'ynali buyumlar"]
                },
                {
                    name: "Bolalar Kiyimlari",
                    menus: ["Shimlar", "Ustki kiyimlar", "Shortiklar", "Futbolkalar"]
                }
            ]
        },
    ]

    const [bgColor, setBgColor] = useState(true)
    const [clickedIndex, setClickedIndex] = useState(0)
    function clickedFunc(props) {
        setClickedIndex(props)
        setBgColor(true)
    }
    return (
        <Stack sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white",
            position: "absolute",
            right: "0",
            top: "140px",
            zIndex: "9",
            borderTop: "1px solid gray",
            paddingTop: "20px"
        }}>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{
                        width: "25%",
                        height: "100vh",
                        backgroundColor: "rgba(243, 243, 247, 1)"
                    }}>
                        {data && data.map((item, index) => {
                            return (
                                <Box key={index} onClick={() => clickedFunc(index)} sx={{
                                    backgroundColor: clickedIndex === (index || 0) && bgColor ? 'white' : 'transparent',
                                    color: clickedIndex === (index || 0) && bgColor ? 'rgba(255, 1, 0, 1)' : 'black',
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    padding: "10px",
                                    borderRight: clickedIndex === (index || 0) && bgColor ? "3px solid rgba(255, 1, 0, 1)" : "none"
                                }}>
                                    <h3 style={{
                                        margin: "0",
                                        padding: "0",
                                        fontSize: "18px",
                                        fontWeight: "400"
                                    }}>{item.main_menu}</h3>
                                </Box>
                            )
                        })}
                    </Box>

                    <Box sx={{
                        width: "75%"
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-around"
                        }}>
                            {data[clickedIndex].categories && data[clickedIndex].categories.map((value, index) => {
                                return (
                                    <Link key={index} to='/' style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}>{value.name}</Link>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}

export default Category