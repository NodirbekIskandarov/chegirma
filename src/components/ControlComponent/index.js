import { Box, Stack, Typography } from "@mui/material";

function ControlComponent () {
    return (
        <Stack sx={{width: "100%"}}>
            <Box sx={{
                width: "auto",
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "10px",
                border: "1px solid rgba(30, 30, 30, 0.3)",
                padding: "10px 20px"
                }}>
                <Typography sx={{color: "rgba(30, 30, 30, 1)", fontSize: "20px", fontWeight: "500"}}>
                Assalomu alaykum
                </Typography>
            </Box>
            <Box sx={{
                width: "auto",
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "10px",
                border: "1px solid rgba(30, 30, 30, 0.3)",
                padding: "10px 20px",
                marginTop: "20px"
                }}>
                <Typography sx={{color: "rgba(30, 30, 30, 1)", fontSize: "20px", fontWeight: "400"}}>
                Lorem ipsum dolor sit amet consectetur. Quis facilisi donec tortor nullam ultrices dignissim ipsum elit. Lacus nisl id tempor vitae et cursus facilisis. 
                </Typography>
            </Box>
        </Stack>
    )
}
export default ControlComponent