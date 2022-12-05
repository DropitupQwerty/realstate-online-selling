import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from './../../components/DataTable';
import { Typography } from '@mui/material';

export default function Reservations() {
  const [reservation, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/reservation/fetch`).then((res) => {
      let data = [...res.data];
      setReservations(data);
    });
  }, []);

  console.log(reservation);

  const columns = [
    {
      field: 'fullname',
      headerName: 'Fullname',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 2,
    },
    {
      field: 'contact',
      headerName: 'Contact Number',
      flex: 2,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 2,
    },

    {
      field: 'property',
      headerName: 'Interested in',
      flex: 2,
    },

    {
      field: 'amountpaid',
      headerName: 'Amount Paid',
      flex: 1,
      renderCell: (rows) => {
        return <Typography>₱{rows.row.amountpaid}</Typography>;
      },
    },
  ];

  return (
    <div>
      <DataTable rows={reservation} columns={columns} />
    </div>
  );
}
