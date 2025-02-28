import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for our context
export type Service = {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
};

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

export type AppointmentData = {
  service: Service | null;
  date: Date | null;
  timeSlot: TimeSlot | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
};

type AppointmentContextType = {
  appointmentData: AppointmentData;
  setService: (service: Service) => void;
  setDate: (date: Date) => void;
  setTimeSlot: (timeSlot: TimeSlot) => void;
  setCustomerInfo: (name: string, email: string, phone: string) => void;
  setNotes: (notes: string) => void;
  resetAppointment: () => void;
};

const defaultAppointmentData: AppointmentData = {
  service: null,
  date: null,
  timeSlot: null,
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  notes: '',
};

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointmentData, setAppointmentData] = useState<AppointmentData>(defaultAppointmentData);

  const setService = (service: Service) => {
    setAppointmentData(prev => ({ ...prev, service }));
  };

  const setDate = (date: Date) => {
    setAppointmentData(prev => ({ ...prev, date }));
  };

  const setTimeSlot = (timeSlot: TimeSlot) => {
    setAppointmentData(prev => ({ ...prev, timeSlot }));
  };

  const setCustomerInfo = (customerName: string, customerEmail: string, customerPhone: string) => {
    setAppointmentData(prev => ({ ...prev, customerName, customerEmail, customerPhone }));
  };

  const setNotes = (notes: string) => {
    setAppointmentData(prev => ({ ...prev, notes }));
  };

  const resetAppointment = () => {
    setAppointmentData(defaultAppointmentData);
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointmentData,
        setService,
        setDate,
        setTimeSlot,
        setCustomerInfo,
        setNotes,
        resetAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = (): AppointmentContextType => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};