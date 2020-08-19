/* eslint-disable react/no-array-index-key */
import React, { forwardRef } from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';

import { Container, Item, ItemContent, ItemText } from './styles';

export interface Item {
  label: string;
  value: number;
}

interface OwnProps {
  data: Item[];
  onItemClick: (item: Item) => void;
}

type Props = OwnProps & ModalizeProps;

const BottomDropdown = ({ data, onItemClick, ...rest }: Props, ref: React.Ref<Modalize>) => {
  return (
    <Modalize ref={ref} snapPoint={300} {...rest}>
      <Container>
        {data.map((item, index) => (
          <Item key={`${index}`} onPress={() => onItemClick(item)}>
            <ItemContent>
              {/* RectButton not support borderBottom | https://github.com/software-mansion/react-native-gesture-handler/issues/477 */}
              <ItemText>{item.label}</ItemText>
            </ItemContent>
          </Item>
        ))}
      </Container>
    </Modalize>
  );
};

export default forwardRef(BottomDropdown);
