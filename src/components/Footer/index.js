import { Box, Button, Container, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import { GlobalParagraph } from "../../global_styles/styles";
import { FooterLink } from "./styles";
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import youtube from '../../media/images/youtube.png'
import telegram from '../../media/images/telegram.png'
import twitter from '../../media/images/twitter.png'
import instagram from '../../media/images/instagram.png'
import footerBack from '../../media/images/footerBack.png'
function Footer() {
    return (
        <Stack width="100%" sx={{
            backgroundColor: "rgba(255, 1, 0, 0.6)",
            backgroundImage: `url(${footerBack})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px 0"
        }}>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white"
                }}>
                    <Box sx={{
                        width: "30%"
                    }}>
                        <GlobalParagraph fontSize="22px" fontWeight="400">
                            Company
                        </GlobalParagraph>
                        <GlobalParagraph fontSize="18px" fontWeight="400" oposity="80%">Find location nearest to you:
                            <br />
                            <a href="/" style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                marginTop: "20px",
                                color: "white",
                                opacity: "100%"
                            }}>See Our Stores</a>
                        </GlobalParagraph>
                        <GlobalParagraph fontSize="18px" fontWeight="400" oposity="80%">
                            +998 99 123 45 67
                        </GlobalParagraph>
                        <GlobalParagraph fontSize="18px" fontWeight="400" oposity="80%">
                            hello@gmail.com
                        </GlobalParagraph>
                    </Box>
                    <Box sx={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                        <GlobalParagraph fontSize="22px" fontWeight="400">
                            Information
                        </GlobalParagraph>
                        <FooterLink to='/' >My Account
                        </FooterLink>
                        <FooterLink to='/' >
                            Log In
                        </FooterLink>
                        <FooterLink to='/'>
                            My Card
                        </FooterLink>
                        <FooterLink to='/' >
                            Wish list
                        </FooterLink>
                    </Box>
                    <Box sx={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                        <GlobalParagraph fontSize="22px" fontWeight="400">
                            Services
                        </GlobalParagraph>
                        <FooterLink to='/' >About us
                        </FooterLink>
                        <FooterLink to='/' >
                            Careers
                        </FooterLink>
                        <FooterLink to='/'>
                            Delivery Information
                        </FooterLink>
                        <FooterLink to='/' >
                            Privacy Policy
                        </FooterLink>
                    </Box>
                    <Box sx={{
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                        <GlobalParagraph fontSize="22px" fontWeight="400">
                            Subscribe
                        </GlobalParagraph>
                        <GlobalParagraph fontSize="18px" fontWeight="400" oposity="80%">
                            Enter your e-mail below to be the first to know about new collections and product launches.
                        </GlobalParagraph>

                        <Box>
                            <TextField
                                id="outlined-basic"
                                label="Your email address"
                                variant="outlined"
                                sx={{
                                    background: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    width: { xl: "350px", md: "350px", sm: "250px", xs: "100%" },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button sx={{
                                                color: "black"
                                            }}>
                                                <ArrowForwardIcon />
                                            </Button>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    width: "80%",
                    float: "right",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px"
                }}>
                    <GlobalParagraph fontSize="20px" fontWeight="400" style={{
                        color: "rgba(255, 255, 255, 1)"
                    }}>©Company 2024</GlobalParagraph>
                    <Box sx={{
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }} >
                        <Box sx={{
                            width: "20%"
                        }}>
                            <img src={telegram} alt="social" />
                        </Box>
                        <Box sx={{
                            width: "20%"
                        }}>
                            <img src={youtube} alt="social" />
                        </Box>
                        <Box sx={{
                            width: "20%"
                        }}>
                            <img src={twitter} alt="social" />
                        </Box>
                        <Box sx={{
                            width: "20%"
                        }}>
                            <img src={instagram} alt="social" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}
export default Footer