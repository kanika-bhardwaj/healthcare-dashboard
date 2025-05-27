const getSlotType = (slot) => {
  if (slot && typeof slot === 'object') { 
    return slot.type || 'booked'; 
  }
  if (slot === '—' || slot === null || slot === undefined) {
    return 'empty-dash'; 
  }
  if (slot) {
    return 'available'; 
  }
  return 'empty'; 
};

export const weeklyCalendarData = {
  monthYear: 'October 2021',
  days: [
    { 
      dayName: 'Mon', 
      dateNumber: '25', 
      isSelected: false,
      timeSlots: [
        { display: '10:00', type: getSlotType('10:00') }, 
        { display: '11:00', type: getSlotType('11:00') }, 
        { display: '12:00', type: getSlotType('12:00') },
        { display: '—', type: getSlotType('—') },
      ] 
    },
    { 
      dayName: 'Tues', 
      dateNumber: '26', 
      isSelected: true, 
      timeSlots: [
        { display: '08:00', type: getSlotType('08:00') }, 
        { display: '09:00', appointmentText: '09:00', type: getSlotType({text: '09:00'}) }, 
        { display: '10:00', type: getSlotType('10:00') },
        { display: '—', type: getSlotType('—') },
      ] 
    },
    { 
      dayName: 'Wed', 
      dateNumber: '27', 
      isSelected: false,
      timeSlots: [
        { display: '12:00', type: getSlotType('12:00') }, 
        { display: '13:00', type: getSlotType('13:00') },
        { display: '—', type: getSlotType('—') },
        { display: '—', type: getSlotType('—') },
      ] 
    },
    { 
      dayName: 'Thurs', 
      dateNumber: '28', 
      isSelected: false,
      timeSlots: [
        { display: '10:00', type: getSlotType('10:00') }, 
        { display: '11:00', appointmentText: '11:00', type: getSlotType({text: '11:00'}) },
        { display: '—', type: getSlotType('—') },
        { display: '—', type: getSlotType('—') },
      ] 
    },
    { 
      dayName: 'Fri', 
      dateNumber: '29', 
      isSelected: false,
      timeSlots: [
        { display: '—', type: getSlotType('—') },
        { display: '14:00', type: getSlotType('14:00') }, 
        { display: '16:00', type: getSlotType('16:00') },
        { display: '—', type: getSlotType('—') },
      ] 
    },
    { 
      dayName: 'Sat', 
      dateNumber: '30', 
      isSelected: false,
      timeSlots: [
        { display: '—', type: getSlotType('—') },
        { display: '12:00', appointmentText: '12:00', type: getSlotType({text: '12:00', type: 'booked-wide'}) }, 
        { display: '14:00', type: getSlotType('14:00') },
        { display: '15:00', type: getSlotType('15:00') },
      ] 
    },
    { 
      dayName: 'Sun', 
      dateNumber: '31', 
      isSelected: false,
      timeSlots: [
        { display: '—', type: getSlotType('—') },
        { display: '09:00', appointmentText: '09:00', type: getSlotType({text: '09:00', type: 'booked-wide'}) }, 
        { display: '10:00', type: getSlotType('10:00') },
        { display: '11:00', type: getSlotType('11:00') },
      ] 
    },
  ]
};

export const appointmentDetails = [
  { 
    id: 1, 
    type: 'Dentist', 
    doctor: 'Dr. Cameron Williamson',
    time: '09:00-11:00',
    imagePath: '/src/assets/images/teeth.png', 
    bgColor: 'bg-brand-blue-dark',
    textColor: 'text-white',
    iconColor: 'text-white', 
  },
  { 
    id: 2, 
    type: 'Physiotherapy Appointment', 
    doctor: 'Dr. Kevin Djones',
    time: '11:00-12:00',
    iconName: 'DumbbellIcon', 
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-800',
    iconBgColor: 'bg-indigo-200',
    iconColor: 'text-indigo-700',
  },
];