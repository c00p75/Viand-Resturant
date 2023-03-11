const branches = [
  {
    Continent: 'Africa',
    locations: [
      { city: 'Lusaka, Zambia', available: true },
      { city: 'Cape town, South Africa', available: true },
      { city: 'Nairobi, Kenya', available: true },
      { city: 'Abuja, Nigeria', available: true },
      { city: 'Windhoek, Namibia', available: false },
    ],
  },

  {
    Continent: 'Europe',
    locations: [
      { city: 'Londan, England', available: true },
      { city: 'Madrid, Spain', available: false },
    ],
  },

  {
    Continent: 'North America',
    locations: [
      { city: 'Washington D.C., USA', available: true },
      { city: 'Mexico City, Mexico', available: true },
    ],
  },

  {
    Continent: 'SouthcAmerica',
    locations: [
      { city: 'Buenos Aires, Argentina', available: true },
      { city: 'Brasília, Brazil', available: true },
    ],
  },

  {
    Continent: 'Asia',
    locations: [
      { city: 'Tokyo, Japan', available: true },
      { city: 'New Delhi, India', available: true },
    ],
  },
];

const timeSlots = [
  '8:00 AM',
  '8:30 AM',
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
  '11:30 PM',
  '12:00 PM',
  '12:30 PM',
];

const bookedTimeSlots = [
  {
    1: {
      tableCount: 1,
      slotBooked: [
        '9:00 AM',
        '11:00 AM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '8:00 PM',
        '9:00 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },
  },
  {
    2: {
      tableCount: 1,
      slotBooked: [
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '2:00 PM',
        '2:30 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '8:30 PM',
        '10:00 PM',
        '11:00 PM',
        '11:30 PM',
        '12:30 PM',
      ],
    },
  },

  {
    3: {
      tableCount: 1,
      slotBooked: [
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:30 AM',
        '11:00 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },
  },

  {
    4: {
      tableCount: 1,
      slotBooked: [
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:00 PM',
        '9:30 PM',
        '11:00 PM',
        '11:30 PM',
      ],
    },
  },

  {
    5: {
      tableCount: 1,
      slotBooked: [
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },
  },

  {
    6: {
      tableCount: 1,
      slotBooked: ['8:00 AM',
        '8:30 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '6:30 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },
  },

  {
    7: {
      tableCount: 1,
      slotBooked: [],
    },
  },

  {
    8: {
      tableCount: 1,
      slotBooked: [
        '8:00 AM',
        '9:00 AM',
        '9:30 AM',
        '10:00 AM',
        '10:30 AM',
        '11:00 AM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '7:00 PM',
        '9:00 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },

  },
  {
    9: {
      tableCount: 1,
      slotBooked: [
        '1:00 PM',
        '1:30 PM',
        '2:00 PM',
        '2:30 PM',
        '3:00 PM',
        '3:30 PM',
        '4:00 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:00 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },
  },

  {
    10: {
      tableCount: 1,
      slotBooked: [
        '4:00 PM',
        '4:30 PM',
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:00 PM',
        '9:30 PM',
        '10:00 PM',
        '10:30 PM',
        '11:00 PM',
        '11:30 PM',
        '12:00 PM',
        '12:30 PM',
      ],
    },
  },
];

export default { branches, timeSlots, bookedTimeSlots };
