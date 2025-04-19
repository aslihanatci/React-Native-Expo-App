import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styleOptions = [
  { id: '1', name: 'Modern' },
  { id: '2', name: 'Vintage' },
  { id: '3', name: 'Minimal' },
  { id: '4', name: 'Abstract' },
];

const HomeScreen: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const onCreatePress = () => {
    console.log('Prompt:', prompt);
    console.log('Selected Style:', selectedStyle);
  };

  const renderStyleCard = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity
      style={[
        styles.styleCard,
        selectedStyle === item.id && styles.styleCardSelected,
      ]}
      onPress={() => setSelectedStyle(item.id)}
    >
      <Text style={styles.styleCardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.promptContainer}>
        <Text style={styles.label}>Enter Your Prompt</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Buraya prompt gir..."
          value={prompt}
          onChangeText={setPrompt}
        />
      </View>

      <View style={styles.styleContainer}>
        <Text style={styles.label}>Logo Styles</Text>
        <FlatList
          data={styleOptions}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderStyleCard}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.styleList}
        />
      </View>

      <TouchableOpacity style={styles.createButton} onPress={onCreatePress}>
        <MaterialIcons name="create" size={24} color="#fff" />
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  promptContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  styleContainer: {
    marginBottom: 30,
  },
  styleList: {
    paddingVertical: 10,
  },
  styleCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  styleCardSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0ff',
  },
  styleCardText: {
    fontSize: 16,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});
