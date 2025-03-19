'use client';

import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Paper, useTheme } from '@mui/material';
import TrainSidebar from '@/components/features/Home/trainSidebar/TrainSidebar';
import { TrainDataProvider } from '@/context/TrainDataContext';
import TrainMap from '@/components/features/Home/trainMap/TrainMap';


export default function Home() {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSelectedTrainId] = useState<string | null>(null);
  const theme = useTheme();
  const handleSelectTrain = (trainId: string) => {
    setSelectedTrainId(trainId);
  };

  return (
    <TrainDataProvider refreshInterval={5000}>
      <Box sx={{ backgroundColor: theme.palette.background.default, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <AppBar position="static" color="primary" sx={{ flexShrink: 0, zIndex: 10 }}>
          <Toolbar variant="dense">
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              German Train Tracker
            </Typography>
            <Typography variant="body2">Real-time train information</Typography>
          </Toolbar>
        </AppBar>
        
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            height: 'calc(100vh - 48px)',
            width: '100%'
          }}
        >
          <Box 
            sx={{ 
              width: { xs: '100%', md: '25%' },
              height: { xs: '50%', md: '100%' },
              overflow: 'hidden'
            }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                height: '100%', 
                borderRadius: { xs: 0, md: 2 },
                m: { xs: 0, md: 1 },
                overflow: 'hidden' 
              }}
            >
              <TrainSidebar onSelectTrain={handleSelectTrain} />
            </Paper>
          </Box>
          <Box 
            sx={{ 
              width: { xs: '100%', md: '75%' },
              height: { xs: '50%', md: '100%' },
              position: 'relative'
            }}
          >
            <TrainMap />
          </Box>
        </Box>
      </Box>
    </TrainDataProvider>
  );
}
