import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/inquiry/fetch').then((res) => {
      const data = [...res.data];

      setInquiries(data);
    });
  }, []);

  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }

  const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
      const isCurrentlyOverflown = isOverflown(cellValue.current);
      setShowPopper(isCurrentlyOverflown);
      setAnchorEl(cellDiv.current);
      setShowFullCell(true);
    };

    const handleMouseLeave = () => {
      setShowFullCell(false);
    };

    React.useEffect(() => {
      if (!showFullCell) {
        return undefined;
      }

      function handleKeyDown(nativeEvent) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          setShowFullCell(false);
        }
      }

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [setShowFullCell, showFullCell]);

    return (
      <Box
        ref={wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignItems: 'center',
          lineHeight: '24px',
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Box
          ref={cellDiv}
          sx={{
            height: '100%',
            width,
            display: 'block',
            position: 'absolute',
            top: 0,
          }}
        />
        <Box
          ref={cellValue}
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {value}
        </Box>
        {showPopper && (
          <Popper
            open={showFullCell && anchorEl !== null}
            anchorEl={anchorEl}
            style={{ width, marginLeft: -17 }}
          >
            <Paper
              elevation={1}
              style={{ minHeight: wrapper.current.offsetHeight - 3 }}
            >
              <Typography variant="body2" style={{ padding: 8 }}>
                {value}
              </Typography>
            </Paper>
          </Popper>
        )}
      </Box>
    );
  });

  GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };

  function renderCellExpand(params) {
    return (
      <GridCellExpand
        value={params.value || ''}
        width={params.colDef.computedWidth}
      />
    );
  }

  renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value.
     * If the column has `valueGetter`, use `params.row` to directly access the fields.
     */
    value: PropTypes.string,
  };

  const columns = [
    {
      field: 'fullname',
      headerName: 'Fullname',
      minWidth: 150,
      renderCell: renderCellExpand,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 2,
      renderCell: renderCellExpand,
    },
    {
      field: 'contact',
      headerName: 'Contact Number',
      flex: 2,
      renderCell: renderCellExpand,
    },
    {
      field: 'date',
      headerName: 'Date Meet',
      flex: 2,
      renderCell: renderCellExpand,
    },
    {
      field: 'time',
      headerName: 'Time Meet',
      flex: 2,
      renderCell: renderCellExpand,
    },
    {
      field: 'property',
      headerName: 'Interested in',
      flex: 2,
      renderCell: renderCellExpand,
    },
    {
      field: 'message',
      headerName: 'Message',
      flex: 4,
      renderCell: renderCellExpand,
    },
  ];

  console.log(inquiries);

  return (
    <div>
      <DataTable
        rows={inquiries}
        columns={columns}
        renderCellExpand={renderCellExpand}
      />
    </div>
  );
}
