import React, { useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import { Animated, Easing } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import dropdownIconPath from '../../../assets/dropdown-icon.png';
import { Container, StyledText } from './styles';

interface OwnProps {
  text: string;
}

type Props = OwnProps & RectButtonProperties;

export interface DropdownProps {
  startToEndAnimation: () => void;
  endToStartAnimation: () => void;
}

const Dropdown = ({ text, ...rest }: Props, ref: React.Ref<DropdownProps>) => {
  const [spinValue] = useState(new Animated.Value(0));

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const startToEndAnimation = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [spinValue]);

  const endToStartAnimation = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [spinValue]);

  useImperativeHandle(ref, () => ({
    startToEndAnimation,
    endToStartAnimation,
  }));

  return (
    <Container {...rest}>
      <StyledText>{text}</StyledText>
      <Animated.Image style={{ transform: [{ rotate: spin }] }} source={dropdownIconPath} />
    </Container>
  );
};

export default forwardRef(Dropdown);
