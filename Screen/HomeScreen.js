import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, [])

  return (
    <SafeAreaView>
        <Text className='text-red-600'>HomeScreen</Text>
        <Text>Kutubkhan</Text>
    </SafeAreaView>
  )
}

export default HomeScreen