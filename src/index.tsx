import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Routes from './routes';
import { DataProvider } from './hooks/data';
// import { Container } from './styles';

const Main: React.FC = () => {
  return (
      <DataProvider>
          <StatusBar style="light" />
          <Routes/>
      </DataProvider>
  );
}

export default Main;