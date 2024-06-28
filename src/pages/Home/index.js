import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AboutUs, BrandsComponent, ProductsComponent, ProductsTitle } from "../../components";
import axios from "axios";

function Home () {

    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.126:8000/api/v1/home/products/');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
    return (
        <Stack>
            <BrandsComponent/>
            <ProductsTitle/>
            <ProductsComponent data={data.results}/>
            <AboutUs/>
        </Stack>
    )
}
export default Home