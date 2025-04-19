import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import StatusChip from '../components/StatusChip';
import TopBar from '../components/TopBar';
import PromptEntry from '../components/PromptEntry';
import GradientBackground from '../components/GradientBackground';

export default function InputScreen({ navigation }: any) {


  return ( 
    <GradientBackground>
    <SafeAreaView> 
    <TopBar/>
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <PromptEntry />
    </View>
    </SafeAreaView> 
    </GradientBackground>
  );
}


