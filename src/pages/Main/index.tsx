import React, { useRef, useCallback, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { Modalize } from 'react-native-modalize';

import BottomDropdown, { Item } from '~/components/BottomDropdown';

import dropdownIconPath from './assets/dropdown-icon.png';
import { Container, Dropdown, DropdownText } from './styles';

const socialMedias = [
  { label: 'Facebook', value: 1 },
  { label: 'Instagram', value: 2 },
  { label: 'Twitter', value: 3 },
];

const Main: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);

  const [selectedCity, setSelectedCity] = useState('Escolha uma rede social');

  const [spinValue] = useState(new Animated.Value(0));

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleOpen = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();

    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  }, [spinValue]);

  const handleClose = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [spinValue]);

  const handleItemClick = useCallback((item: Item) => {
    setSelectedCity(item.label);

    if (modalizeRef.current) {
      modalizeRef.current.close();
    }
  }, []);

  return (
    <Container>
      <Dropdown onPress={handleOpen}>
        <DropdownText>{selectedCity}</DropdownText>
        <Animated.Image style={{ transform: [{ rotate: spin }] }} source={dropdownIconPath} />
      </Dropdown>

      <BottomDropdown ref={modalizeRef} data={socialMedias} onItemClick={handleItemClick} onClose={handleClose} />
    </Container>
  );
};

export default Main;
