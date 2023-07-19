import React from 'react';
import { Stack, TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

const AutoCompleteExample = () => {
    const names = [ 'Clint', 'Sarah', 'James', 'John', 'Ashley' ];

    const top10Films = [
        { id: 1, label: 'The Shawshank Redemption', year: 1994 },
        { id: 2, label: 'The Godfather', year: 1972 },
        { id: 3, label: 'The Godfather: Part II', year: 1974 },
        { id: 4, label: 'The Dark Knight', year: 2008 },
        { id: 5, label: '12 Angry Men', year: 1957 },
        { id: 6, label: "Schindler's List", year: 1993 },
        { id: 7, label: 'Pulp Fiction', year: 1994 },
        { id: 8,  label: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { id: 9,  label: 'The Good, the Bad and the Ugly', year: 1966 },
        { id: 10, label: 'Fight Club', year: 1999 },
    ];

    const options = top10Films.map((option) => {
        console.log(option)
        const firstLetter = option.label[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
    });
    console.log(options);


    return (
        <div>
            <Stack padding={3}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={names}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Names" />}
                />

                <Stack paddingY={1} />

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top10Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Top 10 Movies" />}
                />

                <Stack paddingY={1} />

                <Autocomplete
                    multiple
                    defaultValue={[top10Films[0]]}
                    disablePortal
                    id="combo-box-demo"
                    options={top10Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Top 10 Movies" />}
                />

                <Stack paddingY={1} />

                <Autocomplete
                    multiple
                    limitTags={2}
                    id="grouped-demo"
                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                    groupBy={(option) => option.firstLetter}
                    getOptionLabel={(option) => option.label}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="With categories" />}
                />
            </Stack>
        </div>
    );
};

export default AutoCompleteExample;