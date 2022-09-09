import React from 'react';
import Grid from '@mui/material/Grid';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CommonButton from '../../components/common/CommonButton/CommonButton'
import { IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { cardHeaderStyles } from './styles';
import { Box } from '@mui/system';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';




const Authentication = () => {
  const getSearchBar = () => {
    const handleChange = (value) => {
      console.log(value)
    };

    const addUser = () => {
      console.log('click')
    };

    return (
       <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar 
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleChange(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton 
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Add user
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
    )
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{margin: '40px 16px', color: 'rgba(0,0,0,0.6)', fontSize: '1.3rem'}}
    >
      No users for this project
    </Typography>
  );

  return (
    <GridWrapper>
      <BasicCard 
        header={getSearchBar()}
        content={getContent()}
      />
    </GridWrapper>
  )
};

export default Authentication