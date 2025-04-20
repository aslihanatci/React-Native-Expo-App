import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import PromptEntry from '../components/PromptEntry';
import GradientBackground from '../components/GradientBackground';
import LogoStylesHeader from '../components/LogoStylesHeader';
import LogoStylesCarousel from '../components/LogoStylesCarousel';

export default function InputScreen({ navigation }: any) {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <TopBar />

          <View style={styles.content}>
            <PromptEntry />
            <View style={styles.spacing} />
            <LogoStylesHeader />
            <LogoStylesCarousel />
            {/* Buraya Create Button ekleyebilirsin */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  content: {
    gap: 16,
  },
  spacing: {
    height: 12,
  },
});
