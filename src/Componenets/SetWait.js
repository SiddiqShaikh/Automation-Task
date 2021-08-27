import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
const SetWait = () => {
    const [value, setValue] = useState('');
    const [time, setTime] =useState('');
    const[field,setField]=useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <div className="setWait">
            <h2 className="h2">Set Wait Condition</h2>
            <FormControl component="fieldset">
            <RadioGroup aria-label="for" name="for1" value={value} onChange={handleChange}>
              <Radio>
                <FormLabel component="legend" className="h2" style={{paddingTop:"15px",fontWeight:"bold"}}>For</FormLabel>
                      <FormControlLabel value="value1">
                          <TextField
                          id="outlined-size-normal"
                          defaultValue="Normal"
                          variant="outlined"
                          type="number"
                          />
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControlLabel>
                </Radio>
            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default SetWait
