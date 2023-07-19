import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckboxExample = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
    <div>
        <Checkbox {...label} defaultChecked size='large' />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
    </div>
  );
};

export default CheckboxExample;
 