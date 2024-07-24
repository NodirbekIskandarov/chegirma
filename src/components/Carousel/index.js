import { Stack } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import { Container } from "../../global_styles/styles";

function Carousel() {
    return (
        <Stack sx={{
            marginTop: "24px",
            marginBottom: "30px"
        }}>
            <Container>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="..."/></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="..."/></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="..."/></SwiperSlide>
                    <SwiperSlide><img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="..."/></SwiperSlide>
                </Swiper>
            </Container>
        </Stack>
    )
}
export default Carousel