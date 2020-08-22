/* eslint-disable react/no-array-index-key */
import React, { forwardRef } from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';

import { Container, Item, ItemContent, ItemText, LoadingSpinner } from './styles';

export interface Item {
  label: string;
  value: number;
}

export type BottomSheetProps = Modalize;

interface OwnProps {
  data: Item[];
  loading?: boolean;
  onItemClick: (item: Item) => void;
}

type Props = OwnProps & ModalizeProps;

const BottomSheet = ({ data, loading, onItemClick, ...rest }: Props, ref: React.Ref<BottomSheetProps>) => {
  if (loading) {
    return (
      <Modalize ref={ref} snapPoint={300} {...rest}>
        <Container>
          <LoadingSpinner size={30} />
        </Container>
      </Modalize>
    );
  }

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

export default forwardRef(BottomSheet);
