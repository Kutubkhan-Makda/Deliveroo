import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import {UserIcon,ChevronDownIcon,SearchIcon,AdjustmentsIcon} from 'react-native-heroicons/outline'

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, [])

  return (
      <SafeAreaView style={styles.AndroidSafeArea} className='bg-white pt-5'>
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image source={{uri:'https://links.papareact.com/wru'}} className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
            <Text className='font-bold text-xl'>
              Currunt Location
              <ChevronDownIcon size={20} color='#00CCBB'/>
            </Text>
          </View>
          <UserIcon size={35} color='#00CCBB'/>
        </View>
        <View>
          <View>

          </View>
          <AdjustmentsIcon color=''/>
        </View>
      </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});