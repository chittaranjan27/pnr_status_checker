
const pnrApi = {
  mockData: {
    '1234567890': {
      pnr: '1234567890',
      trainNumber: '12345',
      trainName: 'Rajdhani Express',
      dateOfJourney: '2025-09-15',
      from: 'New Delhi (NDLS)',
      to: 'Mumbai Central (BCT)',
      boardingPoint: 'New Delhi (NDLS)',
      class: '3A',
      chartStatus: 'Chart Prepared',
      passengers: [
        {
          id: 1,
          name: 'John Doe',
          age: 35,
          gender: 'Male',
          currentStatus: 'CNF',
          seatNumber: 'B1-25',
          coach: 'B1',
          foodChoice: 'Veg'
        },
        {
          id: 2,
          name: 'Jane Doe',
          age: 32,
          gender: 'Female',
          currentStatus: 'CNF',
          seatNumber: 'B1-26',
          coach: 'B1',
          foodChoice: 'Veg'
        }
      ]
    },
    '9876543210': {
      pnr: '9876543210',
      trainNumber: '56789',
      trainName: 'Shatabdi Express',
      dateOfJourney: '2025-09-20',
      from: 'Chennai Central (MAS)',
      to: 'Bangalore City (SBC)',
      boardingPoint: 'Chennai Central (MAS)',
      class: '2A',
      chartStatus: 'Chart Not Prepared',
      passengers: [
        {
          id: 1,
          name: 'Amit Kumar',
          age: 28,
          gender: 'Male',
          currentStatus: 'RAC',
          seatNumber: 'RAC-15',
          coach: 'A1',
          foodChoice: 'Non-Veg'
        }
      ]
    },
    '1111111111': {
      pnr: '1111111111',
      trainNumber: '11111',
      trainName: 'Duronto Express',
      dateOfJourney: '2025-09-25',
      from: 'Kolkata (HWH)',
      to: 'Delhi (NDLS)',
      boardingPoint: 'Kolkata (HWH)',
      class: 'SL',
      chartStatus: 'Chart Not Prepared',
      passengers: [
        {
          id: 1,
          name: 'Priya Sharma',
          age: 25,
          gender: 'Female',
          currentStatus: 'WL',
          seatNumber: 'WL-8',
          coach: 'S1',
          foodChoice: 'Veg'
        }
      ]
    }
  },

  async checkPNRStatus(pnrNumber) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const trimmedPnr = pnrNumber.trim();
    
    // Simulate error scenarios
    if (trimmedPnr === 'EXPIRED123') {
      throw new Error('PNR has expired or journey completed');
    }
    
    if (trimmedPnr === 'INVALID123') {
      throw new Error('Invalid PNR number format');
    }
    
    if (trimmedPnr.length !== 10) {
      throw new Error('PNR number must be exactly 10 digits');
    }
    
    if (!/^\d+$/.test(trimmedPnr)) {
      throw new Error('PNR number should contain only digits');
    }
    
    const mockResponse = this.mockData[trimmedPnr];
    
    if (!mockResponse) {
      throw new Error('PNR not found. Please verify your PNR number and try again.');
    }
    
    return {
      success: true,
      data: mockResponse,
      timestamp: new Date().toISOString()
    };
  },

  getSamplePNRs() {
    return [
      { pnr: '1234567890', description: 'Confirmed tickets (CNF)' },
      { pnr: '9876543210', description: 'RAC status' },
      { pnr: '1111111111', description: 'Waitlisted (WL)' }
    ];
  }
};

export default pnrApi;