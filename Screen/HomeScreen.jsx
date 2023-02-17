import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import {UserIcon,ChevronDownIcon,MagnifyingGlassIcon,AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import Categories from '../Components/Categories'

const HomeScreen = () => {
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
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='gray' size={20}/>
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
          </View>
          <AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>
        <ScrollView>
          <Categories/>
        </ScrollView>
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