import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

const SwitchExample = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

   const [state, setState] = useState({
      gilad: true,
      jason: false,
      antoine: true,
    });

    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
  return (
        <div>
            <div>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} disabled defaultChecked />
                <Switch {...label} disabled />
            </div>
            
            <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
                    }
                    label="Gilad Gray"
                    />
                    <FormControlLabel
                    control={
                        <Switch checked={state.jason} onChange={handleChange} name="jason" />
                    }
                    label="Jason Killian"
                    />
                    <FormControlLabel
                    control={
                        <Switch checked={state.antoine} onChange={handleChange} name="antoine" />
                    }
                    label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
        </div>
    );
};

export default SwitchExample;