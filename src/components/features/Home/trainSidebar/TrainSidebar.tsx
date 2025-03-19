'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  ButtonGroup,
  Card, 
  CardContent, 
  Chip, 
  Divider,
  List,
  ListItem,
  IconButton
} from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { useTrainData } from '@/context/TrainDataContext';
import { trainColors } from '@/theme/theme';

interface TrainSidebarProps {
  onSelectTrain?: (trainId: string) => void;
}

const TrainSidebar = ({ onSelectTrain }: TrainSidebarProps) => {
  const [filter, setFilter] = useState<'all' | 'delayed' | 'on-time' | 'cancelled'>('all');
  const { trainData, isLoading, lastUpdated, refreshData } = useTrainData();
  
  const filteredTrains = trainData.filter(train => {
    if (filter === 'all') return true;
    if (filter === 'delayed') return train.status === 'delayed';
    if (filter === 'on-time') return train.status === 'on-time';
    if (filter === 'cancelled') return train.status === 'cancelled';
    return true;
  });

  const getStatusColor = (status: string) => {
    if (status === 'on-time') return trainColors.onTime;
    if (status === 'delayed') return trainColors.delayed;
    return trainColors.cancelled;
  };

  return (
    <Box sx={{ 
      height: '100%',
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column'
    }}>
      <Box sx={{ p: 2, flexShrink: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            Train Information
          </Typography>
          <IconButton 
            onClick={refreshData}
            color="primary"
            disabled={isLoading}
            size="small"
          >
            <Refresh className={isLoading ? 'spin' : ''} />
          </IconButton>
        </Box>
        
        {lastUpdated && (
          <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </Typography>
        )}
        
        <ButtonGroup 
          variant="outlined" 
          size="small" 
          sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}
        >
          <Button 
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'contained' : 'outlined'}
            color="primary"
          >
            All
          </Button>
          <Button 
            onClick={() => setFilter('on-time')}
            variant={filter === 'on-time' ? 'contained' : 'outlined'}
            color="info"
          >
            On Time
          </Button>
          <Button 
            onClick={() => setFilter('delayed')}
            variant={filter === 'delayed' ? 'contained' : 'outlined'}
            color="warning"
          >
            Delayed
          </Button>
          <Button 
            onClick={() => setFilter('cancelled')}
            variant={filter === 'cancelled' ? 'contained' : 'outlined'}
            color="error"
          >
            Cancelled
          </Button>
        </ButtonGroup>
      </Box>
      
      <List sx={{ 
        p: 2, 
        pt: 0, 
        overflowY: 'auto',
        flex: 1,
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#bbb',
          borderRadius: '10px',
          '&:hover': {
            background: '#999',
          },
        },
      }}>
        {filteredTrains.length === 0 ? (
          <Box sx={{ 
            textAlign: 'center', 
            p: 4, 
            color: 'text.secondary',
            bgcolor: 'background.default',
            borderRadius: 2 
          }}>
            No trains match the selected filter
          </Box>
        ) : (
          filteredTrains.map(train => (
            <ListItem key={train.id} sx={{ p: 0, mb: 2 }}>
              <Card 
                variant="outlined" 
                sx={{ 
                  width: '100%', 
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { 
                    boxShadow: 3,
                    transform: 'translateY(-2px)' 
                  },
                  borderLeft: `4px solid ${getStatusColor(train.status)}`
                }}
                onClick={() => onSelectTrain && onSelectTrain(train.id)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                        {train.trainNumber}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {train.city}
                      </Typography>
                    </Box>
                    <Chip
                      label={
                        train.status === 'on-time' 
                          ? 'On Time' 
                          : train.status === 'delayed' 
                            ? `${train.delayMinutes} min delay` 
                            : 'Cancelled'
                      }
                      size="small"
                      color={
                        train.status === 'on-time' 
                          ? 'info' 
                          : train.status === 'delayed' 
                            ? 'warning' 
                            : 'error'
                      }
                    />
                  </Box>
                  
                  <Divider sx={{ my: 1.5 }} />
                  
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" component="p">
                      To: {train.destination}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Departure: {train.departureTime}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Platform: {train.platform}
                    </Typography>
                  </Box>
                  
                  {train.updatedAt && (
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', textAlign: 'right' }}>
                      Updated: {new Date(train.updatedAt).toLocaleTimeString()}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};

export default TrainSidebar; 