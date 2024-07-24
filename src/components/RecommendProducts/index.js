import { Box, Button, Stack } from "@mui/material";
import { GlobalParagraph } from "../../global_styles/styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function RecommendProducts() {
    return (
        <Stack sx={{marginTop: "30px"}}>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <GlobalParagraph fontSize="36px" fontWeight="600">Tavsiya etilganlar</GlobalParagraph>
                <Button sx={{
                        color: "rgba(255, 1, 0, 1)",
                        fontSize: "24px",
                        fontWeight: "400"
                    }}>Barchasi <KeyboardArrowRightIcon/></Button>
            </Box>
            
        </Stack>
    )
}
export default RecommendProducts