import React from 'react';
// import PropTypes from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker as MCalendar } from '@mui/lab';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { styled } from '@mui/material';
import { TextField } from '@mui/material';

const StyledCalendar = styled(MCalendar)(({ theme }) => ({
  color: theme.palette.primary,
}));

const Calendar = () => {
  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCalendar
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
