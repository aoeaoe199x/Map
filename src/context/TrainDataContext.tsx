'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialTrainData, simulateRealTimeUpdates, TrainInfo } from '@/data/trainData';

// Define the context type
interface TrainDataContextType {
  trainData: TrainInfo[];
  isLoading: boolean;
  lastUpdated: Date | null;
  refreshData: () => void;
}

// Create context with default values
const TrainDataContext = createContext<TrainDataContextType>({
  trainData: initialTrainData,
  isLoading: false,
  lastUpdated: null,
  refreshData: () => {},
});

// Custom hook to use the train data context
export const useTrainData = () => useContext(TrainDataContext);

// The provider component
export const TrainDataProvider = ({ children, refreshInterval = 10000 }: { 
  children: React.ReactNode;
  refreshInterval?: number;
}) => {
  const [trainData, setTrainData] = useState<TrainInfo[]>(initialTrainData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Function to fetch updated train data
  const refreshData = async () => {
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call
      // For now, we simulate with our local function
      const updatedData = simulateRealTimeUpdates();
      setTrainData(updatedData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error updating train data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Set up automatic refresh interval
  useEffect(() => {
    // Initial data load
    refreshData();
    
    // Set up interval for updates
    const intervalId = setInterval(refreshData, refreshInterval);
    
    // Clean up on component unmount
    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  // Value provided by the context
  const value = {
    trainData,
    isLoading,
    lastUpdated,
    refreshData,
  };

  return (
    <TrainDataContext.Provider value={value}>
      {children}
    </TrainDataContext.Provider>
  );
};

export default TrainDataProvider; 