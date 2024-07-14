import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { ProductsComponent } from "../../components";
import { Container, GlobalParagraph } from "../../global_styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts, getHomeProductsData, getHomeProductsLoading } from "../../redux/slices/homeSlicer";

function AllProducts () {
    const loading = useSelector(getHomeProductsLoading);
    const products = useSelector(getHomeProductsData);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getHomeProducts());
    }, [dispatch]);
  
    return (
        <Stack>
            <Container>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px"
                }}>
                    <GlobalParagraph fontSize="36px" fontWeight="600">Title</GlobalParagraph>
                </Box>
            </Container>
            {products && <ProductsComponent loading={loading} products={products} />}
        </Stack>
    )
}
export default AllProducts