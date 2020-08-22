import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 2px;
`;

export const LoadingSpinner = styled.ActivityIndicator`
  padding: 20px;
`;

export const Item = styled(RectButton)``;

export const ItemContent = styled.View`
  padding: 20px 0px 10px;

  border-style: solid;
  border-color: #eee;

  border-bottom-width: 1px;
`;

export const ItemText = styled.Text`
  text-align: center;

  font-size: 16px;

  color: #4c4c4c;
`;
