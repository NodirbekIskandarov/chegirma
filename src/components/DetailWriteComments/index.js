import { Box, Button, Stack } from "@mui/material"

function DetailWriteComments() {
    return (
        <Stack sx={{marginTop: "30px"}}>
            <Box>
                <Button sx={{
                    width: "228px",
                    height: "44px",
                    backgroundColor: "rgba(255, 1, 0, 1)",
                    color: "white",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    '&:hover': {
                        backgroundColor: "rgba(200, 1, 0, 1)",
                    }
                }}>Sharh qoldirish</Button>
            </Box>
        </Stack>
    )
}
export default DetailWriteComments