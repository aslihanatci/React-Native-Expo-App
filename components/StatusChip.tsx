import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


interface StatusChipProps {
  status: 'processing' | 'done' | 'error';
  onPress: () => void;
  delaySeconds?: number;
}

const StatusChip: React.FC<StatusChipProps> = ({ status, onPress, delaySeconds }) => {
  const isDone = status === 'done';
  const isProcessing = status === 'processing';
  const isError = status === 'error';

  const renderIcon = () => {
    if (isProcessing) {
      return (
        <View style={styles.iconBox}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    }
    if (isDone) {
      return (
        <View style={styles.iconBox}>
          <Image
            source={require('../assets/output-logo.jpeg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      );
    }
    if (isError) {
      return (
        <View style={[styles.iconBox, { backgroundColor: '#EF4444B2' }]}>
          <Icon name="alert-circle-sharp" size={40} color="#FAFAFA" />
        </View>
      );
    }
  };

  const getTitle = () => {
    if (isProcessing) return 'Creating Your Design...';
    if (isDone) return 'Your Design is Ready!';
    if (isError) return 'Oops, something went wrong!';
  };

  const getSubtitle = () => {
    if (isProcessing) return `Ready in ${delaySeconds ?? '...'}s`;
    if (isDone) return 'Tap to see it.';
    if (isError) return 'Click to try again.';
  };

  const renderRightContent = () => (
    <View style={styles.contentBox}>
      <Text style={styles.title}>{getTitle()}</Text>
      <Text style={styles.subtitle}>{getSubtitle()}</Text>
    </View>
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={isProcessing}
      activeOpacity={0.8}
    >
      {renderIcon()}
      {isDone ? (
        <LinearGradient
          colors={['#943DFF', '#2938DC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          {renderRightContent()}
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.contentBox,
            isError && { backgroundColor: '#EF4444' },
            isProcessing && { backgroundColor: '#27272A' },
          ]}
        >
          {renderRightContent()}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 30
  },
  iconBox: {
    width: 70,
    height: 70,
    backgroundColor: '#27272A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    width: '100%',
    height: 70,
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
  },
  contentBox: {
    width: '100%',
    height: 70,
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.01,
    color: '#FAFAFA',
  },
  subtitle: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.01,
    color: '#D4D4D8',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  errorIcon: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default StatusChip;
