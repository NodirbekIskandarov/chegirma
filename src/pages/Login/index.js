import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import { InputComponent, LineComponent } from "../SignUp/style";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getLoginPassword, saveLogin, savePassword, setStorage } from "../../utils/storage";
import UserService from "../../services/UserService";

function Login() {
  let navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const inputLogin = useRef(null);
  const inputPassword = useRef(null);
  const [defLoginPassword, setDefLoginPassword] = useState({
    login: '',
    password: ''
  })

 
  useEffect(() => {
    const loginPassword = getLoginPassword()
    const login = loginPassword?.login
    const password = loginPassword?.password
    if(login && password){
      setDefLoginPassword({
        seller_input: login,
        password: password
      })
    }
  }, [])

  // "seller_input" : "seller_example1@gmail.com" "password" : "Palonze54"
  const submitHandler = (event) => {
    console.log(event.target.value)
    setLoading(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const email = data.get('email');
    const password = data.get('password');

    UserService.login({
      email,
      password
    }).then(response => {
      if(response.status === 200){
        const { access } = response.data.data.tokens
        setStorage(access)
        // setStorageR(refresh)
        setLoading(false)
        navigate('/')
      }
    }).catch(error => {
      console.log(error)
      // if(error?.response?.data?.message){
      //   enqueueSnackbar(error?.response?.data?.message, { variant: 'error' })
      // }
      setLoading(false)
    })

  }

  const rememberPasswordHandler = (event) => {
    if(event.target.checked){
      saveLogin(inputLogin.current?.querySelector('input')?.value)
      savePassword(inputPassword.current?.querySelector('input')?.value)
    }
  }
  return (
    <Stack>
      <Container>
        <Box component={"form"} onSubmit={submitHandler}
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
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <FormControl fullWidth>
                <FormGroup>
                  <InputComponent type="text" placeholder="First name" />
                </FormGroup>
                <FormGroup>
                  <InputComponent type="text" placeholder="Parol" />
                </FormGroup>
                <FormGroup>
                  <Button
                    variant="contained"
                    type="submit"
                    
                    sx={{
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
                      "&:hover": {
                        backgroundColor: "rgba(255, 1, 0, 1)",
                      },
                    }}
                  >
                    Kirish
                  </Button>
                </FormGroup>
              </FormControl>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "50px",
              }}
            >
              <LineComponent />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "rgba(30, 30, 30, 0.6)",
                }}
              >
                Yoki
              </Typography>
              <LineComponent />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "100px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "rgba(30, 30, 30, 0.6)",
                }}
              >
                Hisobingiz yo'qmi?
              </Typography>
              <Link
                to="/sign-up"
                style={{
                  color: "rgba(255, 1, 0, 0.8)",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                Hozir ro'yhatdan o'ting
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}
export default Login;
