import React, { useRef, useCallback, useState } from 'react';
import { Modalize } from 'react-native-modalize';

import AnimatedDropdown, { AnimatedDropdownProps } from '~/components/AnimatedDropdown';
import BottomSheet, { Item } from '~/components/BottomSheet';

import { Container } from './styles';

const socialMedias = [
  { label: 'Facebook', value: 1 },
  { label: 'Instagram', value: 2 },
  { label: 'Twitter', value: 3 },
];

const Main: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  const dropdownRef = useRef<AnimatedDropdownProps>(null);

  const [selectedSocialMedia, setSelectedSocialMedia] = useState('Escolha uma rede social');

  const handleItemClick = useCallback((item: Item) => {
    setSelectedSocialMedia(item.label);

    if (modalizeRef.current) {
      modalizeRef.current.close();
    }
  }, []);

  const handleOpen = useCallback(() => {
    if (dropdownRef.current) {
      dropdownRef.current.startToEndAnimation();

      if (modalizeRef.current) {
        modalizeRef.current.open();
      }
    }
  }, []);

  const handleClose = useCallback(() => {
    if (dropdownRef.current) {
      dropdownRef.current.endToStartAnimation();
    }
  }, []);

  return (
    <Container>
      <AnimatedDropdown ref={dropdownRef} text={selectedSocialMedia} onPress={handleOpen} />

      <BottomSheet ref={modalizeRef} data={socialMedias} loading onItemClick={handleItemClick} onClose={handleClose} />
    </Container>
  );
};

export default Main;
