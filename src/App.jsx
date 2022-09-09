import Navbar from './components/Navbar/Navbar';
import AppRouter from './routes/AppRouter';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
    setTitle(parsedTitle)
  },[location])
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={dashboardTheme}>
        <Grid container>
          <Navbar />
          <Grid
            item
            sx={{ marginLeft: '320px' }}
            xl={10}
            md={10}
            sm={10}

          >
            <Header title={title}
              sx={{ marginLeft: '320px' }} />
            <AppRouter />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default App
