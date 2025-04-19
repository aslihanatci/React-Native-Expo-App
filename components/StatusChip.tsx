import React, { useEffect } from 'react';
import { Chip } from 'react-native-paper';

type Props = {
  status: 'idle' | 'processing' | 'done';
  onDone: () => void;
};

export default function StatusChip({ status, onDone }: Props) {
  useEffect(() => {
    if (status === 'processing') {
      const timeout = setTimeout(() => {
        onDone();
      }, Math.random() * 30000 + 30000); 
      return () => clearTimeout(timeout);
    }
  }, [status]);

  if (status === 'idle') return null;

  return (
    <Chip
      mode="outlined"
      style={{ marginTop: 16 }}
      onPress={status === 'done' ? onDone : undefined}
      icon={status === 'done' ? 'check' : 'progress-clock'}
    >
      {status === 'processing' ? 'Processing...' : 'Done'}
    </Chip>
  );
}
