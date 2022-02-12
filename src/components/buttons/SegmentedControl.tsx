import React, { useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default function FloatingButton() {

    const [index, setIndex] = useState(0);

    return (
  <SegmentedControl
    values={['All', 'Unread']}
    selectedIndex={index}
    onChange={(event) => {
        setIndex(event.nativeEvent.selectedSegmentIndex);
    }}
  />
)};