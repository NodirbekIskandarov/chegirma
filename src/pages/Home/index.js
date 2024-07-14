import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { AboutUs, BrandsComponent, ProductsComponent, ProductsTitle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts, getHomeProductsData, getHomeProductsLoading } from "../../redux/slices/homeSlicer";

function Home () {
  const loading = useSelector(getHomeProductsLoading);
  const products = useSelector(getHomeProductsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeProducts());
  }, [dispatch]);

    return (
        <Stack>
            <BrandsComponent/>
            <ProductsTitle/>
            {products && <ProductsComponent loading={loading} products={products.slice(0, 4)} />}
            <AboutUs/>
        </Stack>
    )
}
export default Home