import * as React from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img from "./qustionsBackground/questionBackground.png";



const ButtonLeft = styled("button")({
    width: "104px",
    height: "51px",
    border: "none",
    fontSize: "16px",
    color: "#FFFFFF",
    backgroundColor: " #359740",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
  });

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  marginBottom: '30px',
  borderRadius: '8px',
  overflow: "hidden",
  '&:last-child': {
    marginBottom: "0",
  },
  '&:before': {
    display: 'none',
  },
}));

 const useStyles = makeStyles({
     notchedOutline: {
       backgroundColor: "white!important",
       width: "100%",
       alignSelf: "center",
     }
   });


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  margin: '30px',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  width: '60%'
}));

export default function QuestionSection() {
  const [expanded, setExpanded] = React.useState(false);
 
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <Box
    flexDirection={{ xs: 'column', sm: 'row' }}
        sx={{
          pt: "30px",
          m:"auto",
          display:"flex",
          overflow: "hidden",
          maxWidth: 1100,
        }}
      >
          <Box
           width={{ xs: '100%', sm: '65%' }}>                              
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} mt= '30px'>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"  expandIcon={expanded === 'panel1'?<RemoveIcon/>:<CloseIcon sx={{ transform: 'rotate(45deg)'}} />}>
                <Typography>For seller: are these seeds organic? it does matter if they are organic, seeds can hold pesticides from the plant they grow from.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" 
                expandIcon={expanded === 'panel2'?<RemoveIcon/>:<CloseIcon sx={{ transform: 'rotate(45deg)'}} />}>
                <Typography>Can they be grown on hydroponic systems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"
                expandIcon={expanded === 'panel3'?<RemoveIcon/>:<CloseIcon sx={{ transform: 'rotate(45deg)'}} />}>
                <Typography>They did not germinate even when i followed directions. What should i do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
            <Box
               width={{ sm: '32%' }}
               ml={{ xs: '0', sm: '20px' }}
               mt={{ xs: '20px', sm: '0' }}
                sx={{
                    p: "20px",
                    display: "flex",
                    justifyContent: 'flex-end',
                    overflow: "hidden",
                    borderRadius: "20px",
                    backgroundColor: "#EAF1EB",
                    flexDirection: "column",
                    position: "relative",
                    }}
                >
                    <Box
        bottom={{ xs:"65%", sm: "40%"}}
        component="img"
          sx={{
            width: "320px",
            position: "absolute",
            zIndex: "0",
            right: "10%",
            bottom: "80%",
          }}
          alt="img"
          src={img}
        />
                <Typography  
                 mb= "10px" zIndex={"1"}
                 fontSize= '24px'
                 fontWeight= 'bold'>
                     Didn’t find answer?
                </Typography>
                <Typography
                fontSize= '16px'
                 mb= "10px"
                 zIndex={"1"}>
                     Ask your own!
                </Typography>
                <TextField 
                multiline={true}
                rows={expanded === false ? '1' : "8"}
                className={classes.notchedOutline}
                height= "500px"
                id="outlined-basic" label="Type here" variant="outlined"/>
                <ButtonLeft>Send</ButtonLeft>
                </Box>       
    </Box>       
  );
}