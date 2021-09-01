import AddCircleIcon from '@material-ui/icons/AddCircle';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';


// function closeTab() {
//     window.close();
// }
const HeadButton = ({handleClickOpen}) => {
    return (

        
    <div className="auto">
   <Button 
   startIcon={<AddCircleIcon style={{ position: "absolute",
      left: 16, top:9}}/>} 
  className='btn' 
  variant='contained' 
  color='primary' 
  fullWidth
  
  endIcon={<ClearIcon style={{ position: "absolute",
  right: 16, top:9}} onClick={()=>{
window.close();
  }} />}
  onClick={handleClickOpen}
   >Add Automation</Button>
   </div>)
}

export default HeadButton
