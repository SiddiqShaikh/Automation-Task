import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { useHistory } from "react-router-dom"
import '../index.css';

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
