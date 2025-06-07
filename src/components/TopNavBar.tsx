import React from 'react';
import {Button, Avatar, XStack} from 'tamagui';
import {Menu} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';

export default function TopNavBar({openDrawer}: {openDrawer: () => void}) {
  const navigation = useNavigation<any>();
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      padding="$3"
      backgroundColor="$background"
      elevation="$2"
      zIndex={100}>
      <Button icon={<Menu size={20} />} circular onPress={openDrawer} />
      <Avatar
        circular
        size="$6"
        onPress={() => navigation.navigate('ProfileScreen')}>
        <Avatar.Image
          accessibilityLabel="Profile"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </XStack>
  );
}
