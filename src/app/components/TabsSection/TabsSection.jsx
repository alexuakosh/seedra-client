import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import Tab from "../../../ui/components/Tab/Tab.jsx";
import Tabs from "../../../ui/components/Tabs/Tabs.jsx";
import Icon from "../../../ui/components/Icon/Icon.jsx";
import ProductsList from "../ProductsList/ProductsList.jsx";
import { downloadRequestStates } from "../../constants";

const fixed = makeStyles(() => ({
  ourProducts: {
    maxWidth: "1110px",
  },
  ourProductHeading: {
    marginBottom: "40px !important",
    fontWeight: "bold !important",
  },
}));

const categoriies = [
  {
    id: "All",
    name: "All",
    parentId: "null",
    icon: "Leaf",
  },
  {
    id: "Bundles",
    name: "Bundles",
    parentId: "null",
    icon: "Bundles",
  },
  {
    id: "vegetables",
    name: "vegetables",
    parentId: "null",
    icon: "Tomato",
  },
  {
    id: "herbs",
    name: "herbs",
    parentId: "null",
    icon: "CurlyLeaf",
  },
  {
    id: "flowers",
    name: "flowers",
    parentId: "null",
    icon: "Flower",
  },
];

const TabsSection = ({ loading, productList }) => {
  if (loading === downloadRequestStates.LOADING) return <div>Loading...</div>;
  if (loading === downloadRequestStates.ERROR) return <div>Error :(</div>;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categoriesTabs = categoriies.map((category) => (
    <Tab
      label={category.name}
      id={category.id}
      key={category.id}
      icon={<Icon icon={Icon.icons[category.icon]} />}
    />
  ));
  const classes = fixed();

  return (
    <>
      <Box component="main">
        <Box component="section" className={classes.ourProducts}>
          <Box>
            <Box>
              <Typography
                className={classes.ourProductHeading}
                variant="h3"
                component="h3"
              >
                Our products.
              </Typography>
              <Box>
                <Tabs value={value} onChange={handleChange}>
                  {categoriesTabs}
                </Tabs>
              </Box>
            </Box>
            <ProductsList products={productList} loading={loading} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

TabsSection.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      currentPrice: PropTypes.number,
      categories: PropTypes.string,
      description: PropTypes.string,
      imageUrls: PropTypes.string,
      quantity: PropTypes.number,
      popular: PropTypes.bool,
    })
  ),
};

export default TabsSection;
