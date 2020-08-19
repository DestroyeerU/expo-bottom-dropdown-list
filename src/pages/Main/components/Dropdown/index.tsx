import React, { useState } from 'react';
import { Animated } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import dropdownIconPath from '~/../assets/dropdown-icon.png';

import { Container, StyledText } from './styles';

interface OwnProps {
  text: string;
}

type Props = OwnProps & RectButtonProperties;

const Dropdown: React.FC<Props> = ({ text, ...rest }) => {
  const [spinValue] = useState(new Animated.Value(0));

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Container {...rest}>
      <StyledText>{text}</StyledText>
      <Animated.Image style={{ transform: [{ rotate: spin }] }} source={dropdownIconPath} />
    </Container>
  );
};

export default Dropdown;
