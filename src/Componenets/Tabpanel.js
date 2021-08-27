import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UpdateIcon from '@material-ui/icons/Update';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useHistory } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;
   
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,

};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    width: "100%",
    display: 'flex',
    justifyContent: "center",
//   alignItems: "center",


  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "gainsboro",
    fontSize: '24px',
    lineHeight: '32px',
    paddingTop: '8px',
    marginBottom: '12px',
    letterSpacing: '0',
    fontWeight: Typography.fontWeightNormal,
    color: Typography.textDarkBlack,
    
    

  },
  btn:{
      width:400,
      border:'none',
      display: 'flex',
      flexDirection:"column",
 
  },
    btnI:{
        boxShadow: "0px 4px #9DA853",
        backgroundColor: "white",
        border:"1px solid #ffff",
        display: 'flex',
        flexDirection:"column",
        marginTop:15,
        height:60,
  },

}));

export default function VerticalTabs({onChange,onClick}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();
    const Click=()=>{
       history.push('/LeadTrigger')
    };
  const handleChange = (event, newValue) => {
   if(newValue!==0){
       alert("Updated soon")
   }
   else{
    setValue(newValue);
   }
  };

  return (
      <>
      
      <div style={{justifyContent:'center',textAlign:'center'}}><h2 style={{paddingRight:"210px"}}>When Will Your Automation Start?</h2><br/></div> 
    
    <div className={classes.root}>
   
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Lead Trigger" {...a11yProps(0)} />
      
        <Tab label="Opportunity Trigger" {...a11yProps(1)}/>
        <Tab label="Activity Trigger" {...a11yProps(2)} />
        <Tab label="User Trigger" {...a11yProps(3)} />
        <Tab label="Task Trigger" {...a11yProps(4)} />
        
      </Tabs>
      
      <TabPanel value={value} index={0}>

        <ButtonGroup disableElevation variant="contained" className={classes.btn}>
        <Button startIcon={<AddCircleIcon style={{ position: "absolute",
      left: 16, top:20}}/>} onClick={Click}variant="contained" className={classes.btnI}><p style={{fontSize:"10px",}}><h3 style={{fontSize:"15px"}}>Lead Trigger</h3> When a new Lead is created or added</p></Button>

        <Button startIcon={<UpdateIcon style={{ position: "absolute",
      left: 16, top:20}}/>} variant="contained" className={classes.btnI}><p style={{fontSize:"10px",}}><h3 style={{fontSize:"15px"}}>Lead Update</h3> When a new Lead is Updated or changed</p></Button>
        <Button startIcon={<CalendarTodayIcon style={{ position: "absolute",
      left: 16, top:20}}/>} variant="contained" className={classes.btnI}><p style={{fontSize:"10px",}}><h3 style={{fontSize:"15px"}}>On a specific Date</h3>Such as birthday,renewal date etc</p></Button>
        </ButtonGroup>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} >
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  </>
  );
}