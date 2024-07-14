import { Box, Rating, Stack } from "@mui/material";
import React from "react";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EastIcon from "@mui/icons-material/East";
import { Link, useNavigate } from "react-router-dom";
import { ProductCallButton, ProductSendButton } from "./styles";
import MailIcon from "@mui/icons-material/Mail";
import callicon from "../../media/images/callicon.png";

function ProductsComponent({loading, products}) {
  const value = 2;
  const navigate = useNavigate();
  function handleClickFunc (props) { //funcsiya ishlamayapti
    navigate(`/detail/${props}`)
    console.log("nimadir") 
  }

  return (
    <Stack
      sx={{
        margin: "20px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {loading ? (
            <span>loading</span>
          ) : (
            products.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "20.5%",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginBottom: "20px"
                  }}
                  onclick={() => handleClickFunc(item.uuid)}
                >
                  <img src={item.image} alt="mahsulot" width="100%" />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <GlobalParagraph fontSize="14px" fontWeight="500">
                      {item.name}
                    </GlobalParagraph>
                    <FavoriteBorderIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <del
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      {item.original_price} so'm
                    </del>
                    <EastIcon />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <GlobalParagraph
                        fontSize="14px"
                        fontWeight="600"
                        style={{
                          marginRight: "5px",
                          color: "rgba(255, 1, 0, 1)",
                        }}
                      >
                        {item.discount_price}
                      </GlobalParagraph>
                      <span>so'm</span>
                    </Box>
                  </Box>
                  <Box>
                    <Link
                      to="/"
                      style={{
                        color: "black",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {item.seller_name}
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Rating name="read-only" value={value} readOnly />
                    <GlobalParagraph fontSize="14px" fontWeight="400">
                      {item.comments_count}ta sharh
                    </GlobalParagraph>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ProductSendButton>
                      <img src="" alt="" />
                      <MailIcon />
                      Xabar yuborish
                    </ProductSendButton>
                    <ProductCallButton>
                      <img src={callicon} alt="call icon" />
                    </ProductCallButton>
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
      </Container>
    </Stack>
  );
}
export default ProductsComponent;
