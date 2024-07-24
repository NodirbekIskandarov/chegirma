import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { AboutUs, BrandsComponent, Carousel, ProductsComponent, ProductsTitle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts, getHomeProductsData, getHomeProductsLoading } from "../../redux/slices/homeSlicer";
import { setStorage } from "../../utils/storage";

function Home() {
  const loading = useSelector(getHomeProductsLoading);
  const products = useSelector(getHomeProductsData);
  const dispatch = useDispatch();
  useEffect(() => {
    setStorage("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzNDY1MTgwLCJpYXQiOjE3MjA4NzMxODAsImp0aSI6ImEyZDcwNTFjMjZkNDRkMzQ5OWQ3MzA5Y2YyMzIwYTgwIiwidXNlcl9pZCI6IjNkYmQwOTIwLTNiMmUtNDM3OS04MzM4LWE2ZmFjNjQwZTgzMyJ9.zl7l1vqV_rXrBg6uZg36_6tvKxFWH-GPZcA4fp3lPlE")
    dispatch(getHomeProducts());

  }, [dispatch]);

  return (
    <Stack>
      <Carousel />
      <BrandsComponent />
      <ProductsTitle />
      {products && <ProductsComponent loading={loading} products={products.slice(0, 4)} />}
      <AboutUs />
    </Stack>
  )
}
export default Home