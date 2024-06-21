import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { GlobalParagraph } from "../../global_styles/styles";

function ProductDescription() {
    return (
        <Stack>
            <Box>
                <GlobalParagraph fontSize="36px" fontWeight="500" style={{ color: "rgba(30, 30, 30, 1)" }}>Telefon haqida</GlobalParagraph>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "400"
                }}>Xiaomi Redmi 13C Xitoyning taniqli Xiaomi kompaniyasining o'rta darajadagi modelidir. Ushbu smartfon o'rtacha narx va yuqori ishlash xususiyatlariga ega yechim izlayotganlarning e'tiboriga loyiqdir.</Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "400"
                }}>Dizayn va materiallar</Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "400"
                }}>Xiaomi Redmi 13C-bu P2i nano korroziyali qoplamali plastik smartfon bo'lib, uning smartfonini bardoshli va namlikka chidamli qiladi. Amaldagi barcha maydon 82,89% ni tashkil etadi, bu esa smartfonni ixcham va jozibali qiladi.</Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "400"
                }}>Redmi 13C 720x1650 (HD+) o'lchamdagi katta LTPS LCD displeyga ega, ish chastotasi 90 Gts va maksimal yorqinligi 500 cd /m2 gacha va kontrasti 1500:1. Ovoz tizimi ishlab chiqilgan va o'rnatilgan ikkita karnay bilan bir darajada ishlaydi.</Typography>
            </Box>
            <Box>
                <GlobalParagraph fontSize="36px" fontWeight="500">Xarakteristikasi: </GlobalParagraph>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    O’rnatilgan xotira (ROM):_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _128GB
                </Typography> 
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Operativ xotira (RAM): _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 8 GB
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Protsessor_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ MediaTek Helio G85
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Video Protsessor_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Mali-G52 MC2
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Ekran o’lchami_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 76.41 * 168.76 * 8.77 mm
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Old kamera o’chamlari_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 5 MP
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Versiya OS _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ Android 12
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Wi-Fi standarti_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _802.11a/b/g/n/ac
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Og’irligi_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _192 gr
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    Asosiy (orqa) kameralar_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 5000-5999 mA/soat
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>
                    LTE diapazonlarini qo’llab-quvvatlash_ _ _ _ _ _ _ _ _ _ _ _  4G LTE , 3G, 2G
                </Typography>
            </Box>
        </Stack>
    )
}
export default ProductDescription