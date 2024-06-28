import { Box, Button, FormControl, FormGroup, Stack, TextField } from "@mui/material"
import { GlobalParagraph } from "../../global_styles/styles"

function AccountDetailsComponent () {
    return (
        <Stack>
            <Box sx={{
                width: "auto",
                backgroundColor: "rgba(255, 255, 255, 1)",
                border: "1px solid rgba(30, 30, 30, 0.3)",
                borderRadius: "10px"
            }}>
                <GlobalParagraph fontSize="20px" fontWeight="500" style={{
                    color: "rgba(30, 30, 30, 0.6)",
                    marginLeft: "16px"
                }}>Hisob tafsilotlari</GlobalParagraph>
                <Box sx={{
                    width: "auto",
                    border: "0.5px solid rgba(30, 30, 30, 0.3)"
                }}>
                </Box>
                <Box>
                    <FormControl fullWidth>
                        <FormGroup>
                            <TextField id="outlined-basic" label="First name" variant="outlined" sx={{
                                margin: "20px"
                            }}/>
                            <TextField id="outlined-basic" label="Last name" variant="outlined" sx={{margin: "20px"}}/>
                        </FormGroup>
                        <Button sx={{}}>Saqlash</Button>
                    </FormControl>
                </Box>
            </Box>
        </Stack>
    )
}
export default AccountDetailsComponent