import { Box, Checkbox, Collapse, Divider, FormControlLabel, FormGroup, List, ListItemButton, ListItemText, Slider, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import { ProductsComponent } from "../../components";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function Filter() {
    const [openPrice, setOpenPrice] = useState(true);
    const [opensell, setOpensell] = useState(true);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleClickPrice = () => {
        setOpenPrice(!openPrice);
    };
    const handleClicksell = () => {
        setOpensell(!opensell);
    };

    return (
        <Stack>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>

                    <Box sx={{
                        width: "25%",
                        backgroundColor: "white",
                        marginTop: "20px",
                        padding: "10px",
                        borderRadius: "10px"
                    }}>
                        <GlobalParagraph fontSize="24px" fontWeight="500">Filter</GlobalParagraph>
                        <List component="nav"
                            aria-labelledby="nested-list-subheader">
                            <ListItemButton onClick={handleClickPrice}>
                                {openPrice ? <ExpandLess /> : <ExpandMore />}
                                <ListItemText primary="Narx" sx={{ marginRight: "10px" }} />
                            </ListItemButton>
                            <Collapse in={openPrice} timeout="auto" unmountOnExit>
                                <List component="div" sx={{ pt: "16px" }} disablePadding>

                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: 'center',
                                        gap: "10px",
                                        marginBottom: "20px"
                                    }}>
                                        <TextField id="outlined-basic" label="MIN" variant="outlined" />
                                        <TextField id="outlined-basic" label="MAX" variant="outlined" />
                                    </Box>

                                </List>
                            </Collapse>
                        </List>

                        <Divider variant="fullWidth" flexItem />

                        <Box>
                            <List component="nav"
                                aria-labelledby="nested-list-subheader">
                                <ListItemButton onClick={handleClicksell}>
                                    {opensell ? <ExpandLess /> : <ExpandMore />}
                                    <ListItemText primary="Sotish turi" sx={{ marginRight: "10px" }} />
                                </ListItemButton>
                                <Collapse in={opensell} timeout="auto" unmountOnExit>
                                    <List component="div" sx={{ pt: "16px" }} disablePadding>

                                        <Box sx={{
                                            width: "100%",
                                            marginBottom: "20px"
                                        }}>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                            </FormGroup>
                                        </Box>

                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                    </Box>

                    <Box sx={{
                        width: "70%"
                    }}>
                        <ProductsComponent />
                    </Box>

                </Box>



            </Container>
        </Stack>
    )
}
export default Filter