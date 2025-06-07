import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'tamagui';
import TopNavBar from '../components/TopNavBar';
import HomeTotalBalance from '../components/HomeTotalBalance';
import ExpensesGraphic from '../components/ExpensesGraphic';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const openDrawer = () => {
    // @ts-ignore
    navigation.getParent()?.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View flex={1}>
        <TopNavBar openDrawer={openDrawer} />
        <HomeTotalBalance />
        <ExpensesGraphic />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
