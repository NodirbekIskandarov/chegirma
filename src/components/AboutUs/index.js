import { Box, Stack } from "@mui/material";
import React from "react";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import bizhaqimizzda from '../../media/images/bizhaqimizda.png'
function AboutUs () {
    return (
        <Stack sx={{
            backgroundColor: "rgba(250, 236, 104, 1)",
            marginTop: "30px"
        }}>
            <Container>
                <Box sx={{
                    width: "100%",
                    textAlign: "center"
                }}>
                    <GlobalParagraph fontSize="40px" fontWeight="600">Biz haqimizda</GlobalParagraph>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        width: "50%"
                    }}>
                        <img src={bizhaqimizzda} alt="about us "/>
                    </Box>
                    <Box sx={{
                        width: "50%"
                    }}>
                        <GlobalParagraph fontSize="20px" fontWeight="400">Lorem ipsum dolor sit amet consectetur. Lectus aliquam fus mattis tortor pretium feugiat enim ornare auctor. Lectus fermentum suspendisse libero volutpat pellentesque turpis urna urna. Elit id amet ac ullamcorper egestas felis eros tortor maecenas. A amet consequat morbi aliquet dui. Neque adipiscing pulvinar adscing et in euismod cras nulla in. Mauris mi facilisis phasellus adisuspendisse tincidunt. </GlobalParagraph>
                    </Box>
                </Box>

            </Container>
        </Stack>
    )
}
export default AboutUs