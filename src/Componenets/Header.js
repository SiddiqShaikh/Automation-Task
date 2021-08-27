import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import {InputLabel} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { useHistory } from "react-router-dom";

const Header = ({onAdd}) => {
        let history = useHistory();
        const [open, setOpen] = useState(true);
        const [errorMessage, setErrorMessage] =useState("");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    
  };
      const [ProjectName, setProjectName] =useState("ProjectName");
      const [AutomationName, setAutomationName] =useState("AutomationName");
        const handleChange = (event) => {
    setProjectName(event.target.value);
  };
      const handleChange1 = (event) => {
    setAutomationName(event.target.value);
  };
  const error=(e)=>{
    e.preventDefault()
            if(!AutomationName){
                setErrorMessage("*Automation Name Required")
                return
               }
          else{
               history.push('/Tabpanel')
               setOpen(true)
               }
          // else if(!ProjectName){
          //   setErrorMessage("*Project Name Required")
          //   return
          // }

  }
  
    return (
    
      <div>
 
   <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="form-control">
   <DialogContent>
   
   <TextField required id="standard-required" label="Automation Name" defaultValue="Sample" value={AutomationName} onChange={handleChange1} fullWidth />
   {errorMessage && <div className="error"> {errorMessage} </div>} 
   <InputLabel required id="standard-required" className='form-control'>ProjectName</InputLabel>
        <Select
          
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={ProjectName}
          onChange={handleChange}
          fullWidth
          placeholder="ProjectName"
          
        >
          <MenuItem value="ProjectName" >
            <em>esizxx</em>
          </MenuItem>
          <MenuItem value={10}>Project2</MenuItem>
          <MenuItem value={20}>Project3</MenuItem>
          <MenuItem value={30}>Project3</MenuItem>
        </Select>
        </DialogContent>
   <DialogActions>
   <ButtonGroup disableElevation variant="contained" color="primary" className="next">
  <Button endIcon={<ArrowForwardIosIcon/>} onClick={error} className="btn">Next</Button>
      <Button onClick={handleClose} style={{backgroundColor:"transparent", outline:"none", color:"black"}}>Cancel</Button>
   </ButtonGroup>
   </DialogActions>
</Dialog>

    </div>
    )
}

export default Header










