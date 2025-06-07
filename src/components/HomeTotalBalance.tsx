import React from 'react';
import {XStack, YStack, SizableText, Button} from 'tamagui';

export default function HomeTotalBalance() {
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      padding="$4"
      backgroundColor="$background">
      <YStack alignItems="center">
        <SizableText size="$4">TOTAL BALANCE</SizableText>
        <SizableText size="$4" fontWeight="bold">
          $2,000.00
        </SizableText>
      </YStack>
      <YStack alignItems="center">
        <Button
          size="$5"
          backgroundColor="$primary"
          color="$white"
          borderRadius={6}>
          Add income
        </Button>
      </YStack>
    </XStack>
  );
}
