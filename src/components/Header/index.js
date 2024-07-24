import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MainSearchComponent from "../MainSearchComponent";
import taqqoslash from '../../media/images/taqqoslash.png'
import til from '../../media/images/TIL.png'
import person from '../../media/images/person.png'
import favourites from '../../media/images/yoqtirgan.png'
import Menu from "../Menu";
import { Link } from "react-router-dom";
import { ButtonCategory } from "./styles";
import Category from "../Category";
function Header () {
    const [categoryBtn, setCategoryBtn] = useState(false)
    function CategoryBtnFunc () {
        categoryBtn ? setCategoryBtn(false) : setCategoryBtn(true) 
    }
    return (
        <Stack sx={{
            backgroundColor: "white"
        }}>
            <Container>
                <Box width="100%" sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0"
                }}>
                    <Box width="20%" sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                    }}>
                        <Link to='/' style={{
                            textDecoration: "none",
                            color: "black"
                        }}>
                            logo
                        </Link>
                        <ButtonCategory onClick={() => CategoryBtnFunc()}>{categoryBtn ? (<CloseIcon/>) : (<MenuIcon/>)} Kategoriya</ButtonCategory>
                        <Box sx={{
                            display: categoryBtn ? "block" : "none"
                        }}><Category/></Box>
                    </Box>

                    <Box width="75%">
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <MainSearchComponent width="70%"/>
                            <Box width="30%" sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Box sx={{
                                    textAlign: "center",
                                    width: "20%"
                                }}>
                                    <img src={taqqoslash} alt="taqqoslash"/>
                                    <GlobalParagraph fontSize="12px" fontWeight="400">
                                        Taqqoslash
                                    </GlobalParagraph>
                                </Box>
                                <Box sx={{
                                    textAlign: "center",
                                    width: "20%"
                                }}>
                                    <img src={favourites} alt="yoqtirgan"/>
                                    <GlobalParagraph fontSize="12px" fontWeight="400">
                                        Sevimli
                                    </GlobalParagraph>
                                </Box>
                                <Box sx={{
                                    textAlign: "center",
                                    width: "20%"
                                }}>
                                    <img src={til} alt="til"/>
                                    <GlobalParagraph fontSize="12px" fontWeight="400">
                                        O'zbekcha
                                    </GlobalParagraph>
                                </Box>
                                <Box sx={{
                                    textAlign: "center",
                                    width: "20%"
                                }}>
                                    <img src={person} alt="person"/>
                                    <GlobalParagraph fontSize="12px" fontWeight="400">
                                        Person
                                    </GlobalParagraph>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Menu/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}

export default Header