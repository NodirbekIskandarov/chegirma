import { Stack, TextField } from "@mui/material";
import React from "react";

function MainSearchComponent () {
    return (
        <Stack width="65%">
            <TextField sx={{
                width: "100%",
                background: "rgba(30, 30, 30, 0.1)"
            }} id="outlined-basic" label="Search" variant="outlined" />
        </Stack>
    )
}
export default MainSearchComponent