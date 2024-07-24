import { Box, Stack } from "@mui/material";
import { Container } from "../../global_styles/styles";
import { AccountDetailsComponent, ChangePasswordComponent, ControlComponent, OrdersComponent } from "../../components";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import EditIcon from '@mui/icons-material/Edit';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function ControlPanel () {

    const data = [
        {
            name: "Boshqaruv paneli",
            logo: <SettingsIcon/>,
            component: <ControlComponent/>
        },
        {
            name: "Buyurtmalar",
            logo: <ShoppingBasketIcon/>,
            component: <OrdersComponent/>
        },
        {
            name: "Hisob tafsilotlari",
            logo: <FolderSharedIcon/>,
            component: <AccountDetailsComponent/>
        },
        {
            name: "Parolni o'zgartirish",
            logo: <EditIcon/>,
            component: <ChangePasswordComponent/>
        },
        {
            name: "Chiqish",
            logo: <ExitToAppIcon/>
        }
    ]
    const [bgColor, setBgColor] = useState(true)
    const [clickedIndex, setClickedIndex] = useState(0)
    function clickedFunc(props) {
        setClickedIndex(props)
        setBgColor(true)
    }
    return (
        <Stack>
            <Container>
                <Box sx={{
                    margin: "50px auto",
                    width: "80%"
                }}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        gap: "30px"
                    }}>
                        <Box sx={{
                            width: "37%"
                        }}>
                            {data && data.map((item, index) => {
                                return (
                                    <Box key={index} onClick={() => clickedFunc(index)} sx={{
                                        backgroundColor: clickedIndex === (index || 0) && bgColor ? 'rgba(255, 1, 0, 1)' : 'white',
                                        color: clickedIndex === (index || 0) && bgColor ? 'white' : 'rgba(30, 30, 30, 0.6)',
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        padding: "15px",
                                        margin: "20px 0",
                                        borderRadius: "10px"
                                    }}>
                                        {item.logo}
                                        <h3 style={{
                                        margin: "0",
                                        padding: "0",
                                        fontSize: "20px",
                                        fontWeight: "500"
                                    }}>{item.name}</h3>
                                    </Box>
                                )
                            })}
                        </Box>

                        <Box sx={{width: "50%", marginTop: "20px"}}>
                            <Box>
                                {data[clickedIndex].component ? data[clickedIndex].component : "xech narsa yoq"}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}
export default ControlPanel