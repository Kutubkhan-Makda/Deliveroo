import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import {UserIcon,ChevronDownIcon,MagnifyingGlassIcon,AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'
import Categories from '../Components/Categories'
import FeaturedRows from '../Components/FeaturedRows'

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

/*  useEffect(()=>{
    sanityClient.fetch(
      `*[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
    ).then(data => {setFeaturedCategories(data)})
  },[]);
*/

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
        <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom:100}}>
          <Categories/>
          <FeaturedRows id='1' title='Featured' description='Paid placements from our partners' featuredCategory='featured'/>
          <FeaturedRows id='2' title='Tasty Discounts' description="Everyone's been enjoying these juicy discounts" featuredCategory='discounts'/>
          <FeaturedRows id='3' title='Offers near you!' description='Why not support your local restaurant tonight!'/>
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