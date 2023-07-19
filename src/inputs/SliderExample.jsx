import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderExample = () => {
  return (
    <div>
          <Box width={300}>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="off"
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    </div>
  );
};

export default SliderExample;