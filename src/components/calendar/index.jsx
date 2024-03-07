import React from 'react';
// import PropTypes from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { styled } from '@mui/material';
import { TextField as MTextField } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const StyledTextField = styled(MTextField)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&. MuiPickersLayout-root css-4pax7l-MuiPickersLayout-root': {
    borderRadiuss: '10px',
  },
}));

const Calendar = () => {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <StyledTextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
