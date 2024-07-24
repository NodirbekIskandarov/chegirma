import { Box, Stack } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselimage from '../../media/images/carouselimage.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'

import { Pagination, Navigation } from 'swiper/modules';
import { Container } from "../../global_styles/styles";
function Carousel() {

    return (
        <Stack sx={{
            marginTop: "24px",
            marginBottom: "30px"
        }}>
            <Container>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    
                >
                    <SwiperSlide style={{
                        padding: "20px 0"
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Box sx={{
                                width: "40%"
                            }}>
                                <Box sx={{
                                    backgroundColor: "rgba(255, 240, 0, 1)",
                                    width: "295px",
                                    height: "56px",
                                    clipPath: "polygon(0 0, 100% 0%, 89% 41%, 0 42%)",
                                }}>
                                    <span>Chegirma <span>50%</span> <span>gacha</span></span>
                                </Box>
                                <Box sx={{
                                    backgroundColor: "rgba(255, 1, 0, 1)",
                                    width: "300px",
                                    height: "100px",
                                    clipPath: "polygon(0 0, 100% 0%, 89% 41%, 0 42%)",
                                }}>
                                    <span style={{
                                        color: "white"
                                    }}>niamdirjbdcjhbj</span>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: "60%"
                            }}>
                                <img src={carouselimage} alt="carousel "/>
                            </Box>
                            <Box>

                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Container>
        </Stack>
    )
}
export default Carousel