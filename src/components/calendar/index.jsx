import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as MCalendar } from '@mui/lab';
import { styled } from '@mui/material';

const StyledCalendar = styled(MCalendar)(({ theme }) => ({
  color: theme.palette.primary,
}));

const Calendar = () => {
  return <StyledCalendar></StyledCalendar>;
};

export default Calendar;
