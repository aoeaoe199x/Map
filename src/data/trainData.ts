export interface TrainInfo {
  id: string;
  trainNumber: string;
  city: string;
  isDelayed: boolean;
  delayMinutes?: number;
  status: 'on-time' | 'delayed' | 'cancelled';
  platform: string;
  destination: string;
  departureTime: string;
  coordinates: [number, number]; // [latitude, longitude]
  updatedAt?: string;
}

// City coordinates (latitude, longitude)
const cityCoordinates: Record<string, [number, number]> = {
  Berlin: [52.5200, 13.4050],
  Frankfurt: [50.1109, 8.6821],
  Hamburg: [53.5511, 9.9937],
  Hannover: [52.3759, 9.7320],
  Karlsruhe: [49.0069, 8.4037],
  Erfurt: [50.9780, 11.0290],
  Munich: [48.1351, 11.5820],
  Cologne: [50.9375, 6.9603],
  Stuttgart: [48.7758, 9.1829],
  Dresden: [51.0504, 13.7373],
  Leipzig: [51.3397, 12.3731],
  Nuremberg: [49.4521, 11.0767],
  Dortmund: [51.5136, 7.4653],
  Bremen: [53.0793, 8.8017],
  Mannheim: [49.4875, 8.4660],
  Düsseldorf: [51.2277, 6.7735],
  Kiel: [54.3233, 10.1228],
  Magdeburg: [52.1205, 11.6276],
};

// Initial train data
export const initialTrainData: TrainInfo[] = [
  // Berlin trains (3)
  {
    id: '1',
    trainNumber: 'ICE 123',
    city: 'Berlin',
    isDelayed: false,
    status: 'on-time',
    platform: '5',
    destination: 'Munich',
    departureTime: '10:15',
    coordinates: cityCoordinates.Berlin,
  },
  {
    id: '19',
    trainNumber: 'IC 755',
    city: 'Berlin',
    isDelayed: true,
    delayMinutes: 7,
    status: 'delayed',
    platform: '8',
    destination: 'Hamburg',
    departureTime: '11:45',
    coordinates: [52.5250, 13.4100], // Slightly offset to avoid marker overlap
  },
  {
    id: '20',
    trainNumber: 'RE 592',
    city: 'Berlin',
    isDelayed: false,
    status: 'on-time',
    platform: '3',
    destination: 'Dresden',
    departureTime: '12:30',
    coordinates: [52.5150, 13.4000], // Slightly offset to avoid marker overlap
  },
  
  // Frankfurt trains (2)
  {
    id: '2',
    trainNumber: 'IC 456',
    city: 'Frankfurt',
    isDelayed: true,
    delayMinutes: 15,
    status: 'delayed',
    platform: '3',
    destination: 'Berlin',
    departureTime: '11:30',
    coordinates: cityCoordinates.Frankfurt,
  },
  {
    id: '21',
    trainNumber: 'ICE 834',
    city: 'Frankfurt',
    isDelayed: false,
    status: 'on-time',
    platform: '7',
    destination: 'Munich',
    departureTime: '13:15',
    coordinates: [50.1159, 8.6871], // Slightly offset to avoid marker overlap
  },
  
  // Hamburg trains (2)
  {
    id: '3',
    trainNumber: 'ICE 789',
    city: 'Hamburg',
    isDelayed: false,
    status: 'on-time',
    platform: '10',
    destination: 'Stuttgart',
    departureTime: '09:45',
    coordinates: cityCoordinates.Hamburg,
  },
  {
    id: '22',
    trainNumber: 'IC 673',
    city: 'Hamburg',
    isDelayed: true,
    delayMinutes: 22,
    status: 'delayed',
    platform: '12',
    destination: 'Berlin',
    departureTime: '10:50',
    coordinates: [53.5561, 9.9987], // Slightly offset to avoid marker overlap
  },
  
  // Hannover train
  {
    id: '4',
    trainNumber: 'RE 101',
    city: 'Hannover',
    isDelayed: true,
    delayMinutes: 10,
    status: 'delayed',
    platform: '2',
    destination: 'Frankfurt',
    departureTime: '12:20',
    coordinates: cityCoordinates.Hannover,
  },
  
  // Karlsruhe train
  {
    id: '5',
    trainNumber: 'ICE 202',
    city: 'Karlsruhe',
    isDelayed: false,
    status: 'on-time',
    platform: '1',
    destination: 'Hamburg',
    departureTime: '14:05',
    coordinates: cityCoordinates.Karlsruhe,
  },
  
  // Erfurt train
  {
    id: '6',
    trainNumber: 'IC 303',
    city: 'Erfurt',
    isDelayed: true,
    delayMinutes: 25,
    status: 'delayed',
    platform: '7',
    destination: 'Dresden',
    departureTime: '13:45',
    coordinates: cityCoordinates.Erfurt,
  },
  
  // Munich trains (2)
  {
    id: '7',
    trainNumber: 'ICE 505',
    city: 'Munich',
    isDelayed: false,
    status: 'on-time',
    platform: '12',
    destination: 'Berlin',
    departureTime: '08:30',
    coordinates: cityCoordinates.Munich,
  },
  {
    id: '23',
    trainNumber: 'RE 418',
    city: 'Munich',
    isDelayed: true,
    delayMinutes: 13,
    status: 'delayed',
    platform: '5',
    destination: 'Stuttgart',
    departureTime: '09:40',
    coordinates: [48.1401, 11.5870], // Slightly offset to avoid marker overlap
  },
  
  // Cologne trains (2)
  {
    id: '8',
    trainNumber: 'IC 322',
    city: 'Cologne',
    isDelayed: true,
    delayMinutes: 8,
    status: 'delayed',
    platform: '9',
    destination: 'Hamburg',
    departureTime: '11:15',
    coordinates: cityCoordinates.Cologne,
  },
  {
    id: '24',
    trainNumber: 'ICE 951',
    city: 'Cologne',
    isDelayed: false,
    status: 'on-time',
    platform: '6',
    destination: 'Frankfurt',
    departureTime: '12:10',
    coordinates: [50.9425, 6.9653], // Slightly offset to avoid marker overlap
  },
  
  // Stuttgart train
  {
    id: '9',
    trainNumber: 'ICE 842',
    city: 'Stuttgart',
    isDelayed: false,
    status: 'on-time',
    platform: '4',
    destination: 'Frankfurt',
    departureTime: '10:45',
    coordinates: cityCoordinates.Stuttgart,
  },
  
  // Dresden train
  {
    id: '10',
    trainNumber: 'RE 241',
    city: 'Dresden',
    isDelayed: true,
    delayMinutes: 17,
    status: 'delayed',
    platform: '6',
    destination: 'Berlin',
    departureTime: '09:55',
    coordinates: cityCoordinates.Dresden,
  },
  
  // Leipzig train
  {
    id: '11',
    trainNumber: 'ICE 712',
    city: 'Leipzig',
    isDelayed: false,
    status: 'on-time',
    platform: '3',
    destination: 'Munich',
    departureTime: '13:20',
    coordinates: cityCoordinates.Leipzig,
  },
  
  // Nuremberg train
  {
    id: '12',
    trainNumber: 'IC 578',
    city: 'Nuremberg',
    isDelayed: true,
    delayMinutes: 12,
    status: 'delayed',
    platform: '8',
    destination: 'Cologne',
    departureTime: '14:30',
    coordinates: cityCoordinates.Nuremberg,
  },
  
  // Dortmund train
  {
    id: '13',
    trainNumber: 'ICE 921',
    city: 'Dortmund',
    isDelayed: false,
    status: 'on-time',
    platform: '2',
    destination: 'Munich',
    departureTime: '11:50',
    coordinates: cityCoordinates.Dortmund,
  },
  
  // Bremen train
  {
    id: '14',
    trainNumber: 'RE 135',
    city: 'Bremen',
    isDelayed: true,
    delayMinutes: 20,
    status: 'delayed',
    platform: '5',
    destination: 'Hannover',
    departureTime: '10:25',
    coordinates: cityCoordinates.Bremen,
  },
  
  // Mannheim train
  {
    id: '15',
    trainNumber: 'ICE 634',
    city: 'Mannheim',
    isDelayed: false,
    status: 'on-time',
    platform: '11',
    destination: 'Hamburg',
    departureTime: '12:40',
    coordinates: cityCoordinates.Mannheim,
  },
  
  // Düsseldorf trains (2)
  {
    id: '16',
    trainNumber: 'IC 889',
    city: 'Düsseldorf',
    isDelayed: true,
    delayMinutes: 14,
    status: 'delayed',
    platform: '7',
    destination: 'Munich',
    departureTime: '15:15',
    coordinates: cityCoordinates.Düsseldorf,
  },
  {
    id: '25',
    trainNumber: 'RE 763',
    city: 'Düsseldorf',
    isDelayed: false,
    status: 'on-time',
    platform: '4',
    destination: 'Cologne',
    departureTime: '14:05',
    coordinates: [51.2327, 6.7785], // Slightly offset to avoid marker overlap
  },
  
  // Kiel train
  {
    id: '17',
    trainNumber: 'ICE 415',
    city: 'Kiel',
    isDelayed: false,
    status: 'on-time',
    platform: '1',
    destination: 'Frankfurt',
    departureTime: '09:10',
    coordinates: cityCoordinates.Kiel,
  },
  
  // Magdeburg train
  {
    id: '18',
    trainNumber: 'RE 529',
    city: 'Magdeburg',
    isDelayed: true,
    delayMinutes: 18,
    status: 'delayed',
    platform: '4',
    destination: 'Berlin',
    departureTime: '13:05',
    coordinates: cityCoordinates.Magdeburg,
  },
  
  // Additional high-speed trains (ICE)
  {
    id: '26',
    trainNumber: 'ICE 599',
    city: 'Frankfurt',
    isDelayed: false,
    status: 'on-time',
    platform: '9',
    destination: 'Hamburg',
    departureTime: '15:30',
    coordinates: [50.1080, 8.6790], // Slightly offset to avoid marker overlap
  },
];

// Function to simulate real-time updates
export const simulateRealTimeUpdates = (): TrainInfo[] => {
  const updatedTrains = [...initialTrainData].map(train => {
    // Clone the train to avoid modifying the original data
    const updatedTrain = { ...train };
    
    // Randomly update train status (30% chance of change)
    if (Math.random() < 0.3) {
      // If train is currently on time, introduce a delay
      if (!updatedTrain.isDelayed) {
        updatedTrain.isDelayed = true;
        updatedTrain.status = 'delayed';
        updatedTrain.delayMinutes = Math.floor(Math.random() * 20) + 5; // 5-25 minutes delay
      } 
      // If train is already delayed, possibly increase or decrease the delay
      else if (updatedTrain.delayMinutes !== undefined) {
        const delayChange = Math.floor(Math.random() * 10) - 5; // -5 to +5 minutes
        updatedTrain.delayMinutes = Math.max(1, updatedTrain.delayMinutes + delayChange);
        
        // Sometimes, a delayed train can recover
        if (Math.random() < 0.2 && updatedTrain.delayMinutes < 5) {
          updatedTrain.isDelayed = false;
          updatedTrain.status = 'on-time';
          updatedTrain.delayMinutes = 0;
        }
      }
    }
    
    // Small chance (5%) of a train being cancelled
    if (Math.random() < 0.05 && updatedTrain.status !== 'cancelled') {
      updatedTrain.status = 'cancelled';
      updatedTrain.isDelayed = true;
    }
    
    // Add timestamp for when the data was updated
    updatedTrain.updatedAt = new Date().toISOString();
    
    return updatedTrain;
  });
  
  return updatedTrains;
};

// Initial export of data
export const trainData = initialTrainData;

export default initialTrainData; 