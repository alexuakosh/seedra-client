import React from 'react';
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import Tab from "../Tab/Tab.jsx"; 
import Tabs from "../Tabs/Tabs.jsx"; 
import Icon from "../Icon/Icon.jsx"; 

/* eslint-disable  */
const useStyles = makeStyles(() => ({
        ourProducts: {
            maxWidth: "1110px",   
        },
        ourProductHeading: {
            marginBottom: "40px !important",
            fontWeight: "bold !important",
        }
    
}))

const categoriies = [
    {
        id: "All",
        name: "All", 
        parentId: "null",
        icon: "Leaf"
    },
    {
        id: "Bundles",
        name: "Bundles", 
        parentId: "null",
        icon: "Bundles"
    },
    {
        id: "vegetables",
        name: "vegetables", 
        parentId: "null",
        icon: "Tomato"
    },
    {
        id: "herbs",
        name: "herbs", 
        parentId: "null",
        icon: "CurlyLeaf"
    },
    {
        id: "flowers",
        name: "flowers", 
        parentId: "null",
        icon: "Flower"
    }

]

 const TabsSection = ({loading}) => {
    if(loading === "loading") return <div>Loading...</div>; // Here must be a loarer
    if(loading === "error") return <div>Error :(</div>; 
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const categoriesTabs = categoriies.map(category => <Tab label={category.name} id={category.id} key={category.id} icon={<Icon icon={Icon.icons[category.icon]}/>}/>)
    const classes = useStyles();

    return (
        <>
        <main>
            <section className={classes.ourProducts}>
                <div>
                    <Typography className={classes.ourProductHeading} variant="h1" component="h2">
                        Our products.
                    </Typography>
                    <div>
                        <Tabs value={value} onChange={handleChange}>{categoriesTabs}</Tabs>
                    </div>

                </div>
            </section>
        </main>
        </>
    )
}

export default TabsSection;