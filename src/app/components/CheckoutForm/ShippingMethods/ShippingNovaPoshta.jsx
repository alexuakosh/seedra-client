import { TextField, Box, Autocomplete, Grid, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useFormikContext } from "formik";


const ShippingNovaPoshta = () => {
  const { setFieldValue } = useFormikContext();
  const [cityes, setPostOfficeCity] = useState({
    data: {
      data: [{ Description: "Enter min 3 characters" }],
    },
  });

  const [postOffice, setPostOffice] = useState({
    data: {
      data: [{ Description: "Loading..." }],
    },
  });

  const novaPoshtaApiKey = "7cf87c82521d99729382a37e171da6e7";
  

  const fetchData = (func, settings) => {
    const config = {
      method: "POST",
      url: "https://api.novaposhta.ua/v2.0/json/",
      headers: {
        "content-Type": "application/json",
      },
      data: settings,
      redirect: "follow",
    };
    axios(config).then((response) => func(response));
  };

  const handlerPostOffice = (param) => {
    const settings = {
      apiKey: novaPoshtaApiKey,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: `${param.inputProps.value}`,
        Limit: 500,
      },
    };
    fetchData(setPostOffice, settings);
  };

  const handlerCity = (param) => {
    setPostOfficeCity({
      data: {
        data: [{ Description: "Loading..." }],
      },
    });
    const settings = {
      apiKey: novaPoshtaApiKey,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: `${param.inputProps.value}`,
        Limit: 5,
      },
    };
    fetchData(setPostOfficeCity, settings);
  };

  return (
    <>
      <Typography marginBottom={"10px"}>Post Office Info</Typography>
      <Grid container justifyContent="space-around" direction="column">
        <Autocomplete
          onChange={(e, value) => {
            if (value.Description !== null) {
              setFieldValue("postOfficeCity", value.Description)
            }
          }}
          options={cityes.data.data}
          autoHighlight
          getOptionLabel={(option) => option.Description}
          isOptionEqualToValue={(option) => option.Description}
          renderOption={(props, option) => (
            <Box key={option.Ref} component="li" {...props}>
              {option.Description}
            </Box>
          )}
          renderInput={(params) => (           
            <TextField
              {...params}
              required
              size="small"
              onChange={() => {
              handlerCity(params);
              }}
              onBlur={() => handlerPostOffice(params)}
              type="text"
              label="Choose a city"
              name="postOfficeCity"
            />
          )}
        />
        <Autocomplete
          name="postOfficeWarehouse"
          onChange={(e, value) => {
            if (value.Description !== null)
             {setFieldValue("postOfficeWarehouse", value.Description);}           
          }}
          sx={{ marginTop: "15px" }}
          options={postOffice.data.data}
          autoHighlight
          getOptionLabel={(option) => option.Description}
          isOptionEqualToValue={(option) => option.Description}
          renderOption={(props, option) => (
            <Box key={option.Ref} component="li" {...props}>
              {option.Description}
            </Box>
          )}
          renderInput={(params) => (
            <TextField   
              {...params} 
              required
              size="small"
              onChange={() => {
                handlerCity(params);
              }}
              onBlur={() => handlerPostOffice(params)}
              type="text"
              label="Choose a post office"
            />
          )}
        />
      </Grid>
    </>
  );
};

export default ShippingNovaPoshta;
