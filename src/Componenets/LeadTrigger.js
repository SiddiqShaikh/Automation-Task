import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { useHistory } from "react-router-dom"
import SvgIcon from '@material-ui/core/SvgIcon';
import CreateIcon from '@material-ui/icons/Create';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/iconbutton';
import { InputAdornment } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import '../index.css';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
} 
const LeadTrigger = () => {
    let history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    
  };
  const onClick=()=>{
    history.push('/SetWait')
  }
    return (
       <>
        {/* <div className="menu" >
           <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}className="btnI">
        Lead Trigger
      </Button>
      </div> */}
 <Grid container justify="space-between" direction="row" spacing={2}>
 <Grid item xs={2}>
       <HomeIcon style={{float:"left",background:"white",boxShadow:"-1px 1px grey",margin:"10px",padding:0}} onClick={()=>{history.push('/')}} />
       </Grid>
       <Grid item xs={4}>
       <TextField
      
             InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <CreateIcon />
        </IconButton>
      </InputAdornment>)
  }}
                fullWidth
                id="outlined-size-normal"
                defaultValue="Normal"
                variant="outlined"
                style={{marginBottom:"10px"}}
                
              />
              
              </Grid>

          </Grid>
        <div className="menu" >
           <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="btnI" style={{width:"500px"}}>
            <p style={{fontSize:"10px",marginRight:"320px"}}><h3 style={{fontSize:"15px"}}>LeadCreated</h3>
           
            New lead created</p>
    
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
     style={{left:"200px",top:"50px"}}
      >
        <p>Choose condition or Actions</p>
   <MenuItem   onClick={handleClose}><Button startIcon={<WatchLaterIcon style={{ position: "absolute",
      left:-10, top:9}}/>}>Wait</Button></MenuItem>
    <MenuItem   onClick={onClick}><Button startIcon={<ScatterPlotIcon style={{ position: "absolute",
      left:-10, top:9}}/>}>If/Else</Button></MenuItem>
        
      </Menu> 
        
        </div>
    </>
    )

}

export default LeadTrigger
