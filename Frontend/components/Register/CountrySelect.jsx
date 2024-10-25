import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../../src/listsUsed/countriesList';

export default function CountrySelect({ onChange }) {
  const handleChange = (event, newValue) => {
    // Call the onChange prop with the selected country
    if (newValue) {
      onChange({ target: { name: 'country', value: newValue.label } });
    }
  };

  return (
    <Autocomplete
      onChange={handleChange}
      name="country"
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 }}}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Choose a country"
          sx={{
            '& .MuiInputBase-root': {
              height: '5vh',
            },
            '& .MuiInputBase-input': {
              height: '5vh',
              boxSizing: 'border-box',
            },
            marginTop: "-1rem",
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

