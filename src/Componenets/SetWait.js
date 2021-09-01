import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const SetWait = () => {
  let history = useHistory();
  const [value, setValue] = useState("");
  const [time, setTime] = useState('');
  const [field, setField] = useState(true);
  const [state, setState] =useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
    setState(true);

  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
const[SelectedDate,setSelectedDate]=useState(
  new Date("2021-08-30T12:00:00")
  )
  const handleDateChange=(date)=>{
    setSelectedDate(date);
}
const onClick=()=>{
 
    history.push('/');

  
}
  const {check} = state;
  function closeTab() {
    window.close();
}
  
  return (
    <div>
      <h3 className="h2"style={{marginBottom:"10px"}}>Set Wait Condition</h3>
      <Divider light />
      <p className="h2" >Lead Waits</p>
      <FormControl component="fieldset" className="form-control">
        <RadioGroup aria-label="for" name="for" value={value} onChange={handleChange}>
          <FormControlLabel value="for" control={<Radio />} label="For" style={{color:"Black"}}/>
          <Grid container direction="row" spacing={2}
          text-align="center">
            <Grid item xs={6}>
              <TextField
                style={{margin:"10px"}}
                fullWidth
                id="outlined-size-normal"
                defaultValue="Normal"
                variant="outlined"
                type="number"
                disabled={value != "for"}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
              style={{marginTop:"30px"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                disabled={value != "for"}
                onChange={handleTimeChange}
                fullWidth
             >         
                {/* <MenuItem value={10}></MenuItem> */}
                <MenuItem value={20}>Minutes</MenuItem>
                <MenuItem value={30}>Hours</MenuItem>
                <MenuItem value={40}>Days</MenuItem>
                <MenuItem value={50}>Weeks</MenuItem>
                <MenuItem value={60}>Months</MenuItem>
                <MenuItem value={70}>Years</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
        <FormControlLabel
            control={<Checkbox checked={check}  name="check" />}
            label="Specifiy Exact Time and Day(s)" disabled={value != "for"} style={{color:"Black"}}
          />
          </Grid>
          </Grid>


          <FormControlLabel value="specific" control={<Radio />} label="Till a Specific Date & Time" style={{color:"Black"}}/>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-between'>
              <KeyboardDatePicker
                disableToolbar
                disabled={value != "specific"}
                variant='inline'
                format='MM/dd/yyy'
                margin='normal'
                id='date-picker'
               
                value={SelectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label':'change date'
                }}
                />
            <KeyboardTimePicker
              style={{marginLeft:"30px"}}
              disabled={value != "specific"}
              margin="normal"
              id="time-picker"
              
              value={SelectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
                 }}
                    />
              </Grid>
              </MuiPickersUtilsProvider>

        </RadioGroup>
        <ButtonGroup disableElevation variant="contained" color="primary" justifyContent="space-around" style={{marginLeft:"450px"}}>
  <Button onClick={closeTab} style={{backgroundColor:"transparent", outline:"none", color:"black"}}>Cancel</Button>
  <Button className="btn" onClick={onClick}>Next</Button>
      
   </ButtonGroup>
      </FormControl>
    </div>
  )
}

export default SetWait
