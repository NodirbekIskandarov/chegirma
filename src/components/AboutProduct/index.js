import { Box, Button, Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import { GlobalParagraph } from "../../global_styles/styles";
import heart from '../../media/images/loveicon.png'
import tarozi from '../../media/images/taroziicon.png'
import share from '../../media/images/shareicon.png'
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import mail from '../../media/images/mail.png'
import call from '../../media/images/call.png'
function AboutProduct() {
    const [clickedBtnColor, setClickedBtnColor] = useState("1")
    const [selectedColor, setSelectedColor] = useState("1")
    function clickedFunc(props) {
        setClickedBtnColor(props)
    }

    function colorSelectFunc(props) {
        setSelectedColor(props)
    }
    return (
        <Stack>
            <GlobalParagraph fontSize="30px" fontWeight="600">Xiaomi Redmi 13C 4/128 GB Qora Smartfoni </GlobalParagraph>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Box sx={{
                    width: "35%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Rating value={3} disabled />
                    <span style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "rgba(30, 30, 30, 0.6)"
                    }}>25 ta sharh</span>
                </Box>

                <Box sx={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <img src={tarozi} alt="tarozi" />
                    <img src={heart} alt="heart" />
                    <span style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        width: "40%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "rgba(30, 30, 30, 0.6)"
                    }}>
                        <img src={share} alt="share" />
                        Ulashish</span>
                </Box>
            </Box>
            <Box sx={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <GlobalParagraph fontSize="30px" fontWeight="500" color="rgba(30, 30, 30, 1)">Narx: </GlobalParagraph>
                <del style={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>2 159 000 so'm</del>
                <EastIcon sx={{
                    width: "50px"
                }} />
                <GlobalParagraph fontSize="30px" fontWeight="500" style={{
                    color: "rgba(255, 1, 0, 1)"
                }}>1 719 000 <span style={{ fontSize: "24px", color: "rgba(30, 30, 30, 0.6)" }}>so'm</span></GlobalParagraph>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                gap: "20px"
            }}>
                <GlobalParagraph fontSize="30px" fontWeight="500">Atribut:</GlobalParagraph>
                <Box sx={{
                    width: "45%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Button sx={{
                        color: clickedBtnColor === "1" ? "rgba(255, 1, 0, 1)" : "rgba(30, 30, 30, 0.4)",
                        fontSize: "24px",
                        fontWeight: "500",
                        border: "1px solid gray",
                        backgroundColor: "white"
                    }}
                        id="1"
                        onClick={(e) => clickedFunc(e.target.id)}
                    >
                        128 gb
                    </Button>
                    <Button sx={{
                        color: clickedBtnColor === "2" ? "rgba(255, 1, 0, 1)" : "rgba(30, 30, 30, 0.4)",
                        fontSize: "24px",
                        fontWeight: "500",
                        border: "1px solid gray",
                        backgroundColor: "white"
                    }}
                        id="2"
                        onClick={(e) => clickedFunc(e.target.id)}
                    >
                        256 gb
                    </Button>
                    <Button sx={{
                        color: clickedBtnColor === "3" ? "rgba(255, 1, 0, 1)" : "rgba(30, 30, 30, 0.4)",
                        fontSize: "24px",
                        fontWeight: "500",
                        border: "1px solid gray",
                        backgroundColor: "white"
                    }}
                        id="3"
                        onClick={(e) => clickedFunc(e.target.id)}
                    >
                        512 gb
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px"
            }}>
                <GlobalParagraph fontSize="30px" fontWeight="500" style={{color: "rgba(30, 30, 30, 1)"}}>Rang: </GlobalParagraph>
                <span style={{fontSize: "30px", fontWeight: "500", color: "rgba(30, 30, 30, 0.6)"}}>{selectedColor==="1" ? ("Gray") : selectedColor==="2" ? ("Blue") : ("Black")}</span>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                <button style={{
                    width: selectedColor==="1" ? "45px" : "40px",
                    height: selectedColor==="1" ? "45px" : "40px",
                    backgroundColor: "rgba(217, 217, 217, 1)",
                    borderRadius: "50%",
                    border: selectedColor === "1" ? "2px solid black" : "none",
                    cursor: "pointer"
                }} id="1" onClick={(e) => colorSelectFunc(e.target.id)}></button>
                <button style={{
                    width: selectedColor==="2" ? "45px" : "40px",
                    height: selectedColor==="2" ? "45px" : "40px",
                    backgroundColor: "rgba(21, 198, 198, 1)",
                    borderRadius: "50%",
                    border: selectedColor === "2" ? "2px solid black" : "none",
                    cursor: "pointer"
                }} id="2" onClick={(e) => colorSelectFunc(e.target.id)}></button>
                <button style={{
                    width: selectedColor==="3" ? "45px" : "40px",
                    height: selectedColor==="3" ? "45px" : "40px",
                    backgroundColor: "rgba(30, 30, 30, 1)",
                    borderRadius: "50%",
                    border: selectedColor === "3" ? "2px solid white" : "none",
                    cursor: "pointer"
                }} id="3" onClick={(e) => colorSelectFunc(e.target.id)}></button>
            </Box>
            <Box sx={{
                width: '100%',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end"
            }}>
                <Link to='/' style={{
                    fontSize: "36px",
                    fontWeight: "500",
                    color: "rgba(0, 141, 255, 1)"
                }}>Smartfon.uz</Link>
                <Box sx={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <button style={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "50%",
                        backgroundColor: "rgba(40, 238, 23, 1)"
                    }}><img style={{
                        width: "25px",
                        height: "25px"
                    }} src={call} alt="call"/></button>
                    <button style={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 215, 0, 1)"
                    }}><img style={{
                        width: "25px",
                        height: "25px"
                    }} src={mail} alt="mail"/></button>
                </Box>
            </Box>
        </Stack>
    )
}
export default AboutProduct