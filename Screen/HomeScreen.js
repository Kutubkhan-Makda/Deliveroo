import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      
    })
  }, [])

  return (
    <View>
        <Text className='text-red-600'>HomeScreen</Text>
        <Text>Kutubkhan</Text>
    </View>
  )
}

export default HomeScreen