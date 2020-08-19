import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #f0f3f5;
`;

export const Dropdown = styled(RectButton)`
  width: 100%;
  max-width: ${Dimensions.get('screen').width * 0.9}px;

  height: 56px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  border-radius: 8px;

  background: #fff;
`;

export const DropdownText = styled.Text`
  font-size: 14px;
  font-weight: normal;

  color: #747478;
`;
