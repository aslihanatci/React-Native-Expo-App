import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const MAX_LENGTH = 500;

const PromptEntry = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Enter Your Prompt</Text>
        <View style={styles.surpriseContainer}>
          <Text style={styles.surpriseEmoji}>🎲</Text>
          <Text style={styles.surpriseText}>Surprise me</Text>
        </View>
      </View>

      {/* Prompt Box */}
      <View style={styles.promptBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your idea..."
          placeholderTextColor="#9CA3AF"
          multiline
          maxLength={MAX_LENGTH}
          value={prompt}
          onChangeText={setPrompt}
        />
        <Text style={styles.charCount}>{prompt.length}/{MAX_LENGTH}</Text>
      </View>
    </View>
  );
};

export default PromptEntry;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 25,
    width: '100%',
  },
  title: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 20,
    lineHeight: 25,
    color: '#FAFAFA',
  },
  surpriseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  surpriseEmoji: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FAFAFA',
  },
  surpriseText: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FAFAFA',
  },
  promptBox: {
    width: '100%',
    height: 175,
    borderRadius: 16,
    padding: 12,
    backgroundColor: '#27272A',
    borderWidth: 1,
    borderColor: 'rgba(148, 61, 255, 0.05)',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    color: '#FAFAFA',
    fontSize: 15,
    textAlignVertical: 'top', // çok satırlı inputta yukardan başlatır
  },
  charCount: {
    alignSelf: 'flex-start',
    fontSize: 12,
    color: '#9CA3AF',
  },
});
