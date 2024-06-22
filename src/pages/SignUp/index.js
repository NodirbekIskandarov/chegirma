import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import {
  Container,
  GlobalParagraph,
} from "../../global_styles/styles";
import { InputComponent, LineComponent } from "./style";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Stack>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              width: "614px",
              backgroundColor: "rgba(255, 255, 255, 1)",
              padding: "20px 40px",
              borderRadius: "10px",
            }}
          >
            <GlobalParagraph
              fontSize="36px"
              fontWeight="500"
              color="rgba(30, 30, 30, 1)"
            >
              Shaxsiy ma’lumotlar
            </GlobalParagraph>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "rgba(30, 30, 30, 0.6)",
              }}
            >
              Sizning shaxsiy ma’umotlaringiz ushbu veb-saytdagi
              amaliyotlaringizni qo’llab-quvvatlash, hisobingizga kirishni
              boshqarish va maxfiylik siyosatimizda tasvirlangan boshqa
              maqsadlarda foydalaniladi.
            </Typography>
            <Box sx={{
                marginTop: "20px"
            }}>
              <FormControl fullWidth>
                <FormGroup>
                  <InputComponent type="text" placeholder="First name"/>
                  <InputComponent type="text" placeholder="Last name"/>
                  </FormGroup>
                  <FormGroup>
                  <InputComponent type="tel" placeholder="+998 _ _    _ _ _   _ _  _ _"/>
                  </FormGroup>
                  <FormGroup>
                  <InputComponent type="text" placeholder="Parol"/>
                  <InputComponent type="text" placeholder="Parolni takrorlang"/>
                </FormGroup>
                <FormGroup>
                    <Button variant="contained" type="submit" sx={{
                        width: "100%",
                        marginTop: "25px",
                        backgroundColor: "rgba(255, 1, 0, 1)",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "18px",
                        fontWeight: "500",
                        textTransform: "none",
                        padding: "10px 0",
                        '&:hover': {
                            backgroundColor: "rgba(255, 1, 0, 1)",
                        }
                    }}>
                        Ro’yxatdan o’tish
                    </Button>
                </FormGroup>
              </FormControl>
            </Box>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: '50px'
            }}>
                <LineComponent/>
                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>Yoki</Typography>
                <LineComponent/>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "100px"
            }}>
                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "rgba(30, 30, 30, 0.6)"
                }}>Hisobingiz bormi?</Typography>
                <Link to="/login" style={{
                    color: "rgba(255, 1, 0, 0.8)",
                    fontSize: "14px",
                    fontWeight: "400",
                    textDecoration: "none",
                    marginLeft: "10px"
                }}>Hozir kiring</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}
export default SignUp;
