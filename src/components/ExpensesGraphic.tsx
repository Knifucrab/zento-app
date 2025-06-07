import React from 'react';
import {XStack, SizableText, YStack} from 'tamagui';
import SemiCircleProgress from './SemiCircleProgress';

export default function ExpensesGraphic() {
  // Example values
  const currentValue = 720;
  const maxValue = 2400;

  return (
    <YStack backgroundColor="$background" flex={1}>
      <SizableText
        size="$4"
        backgroundColor="$background"
        fontWeight={'bold'}
        padding="$4">
        Expenses
      </SizableText>
      <XStack
        alignItems="center"
        justifyContent="center"
        backgroundColor="$background">
        <SemiCircleProgress value={currentValue} max={maxValue} />
      </XStack>
    </YStack>
  );
}
