import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, [])

  return (
    <SafeAreaView>
        <View>
          <Image source={{uri:'https://links.papareact.com/wru'}} className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
        </View>
        <View>
          <Text>Deliver Now</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen