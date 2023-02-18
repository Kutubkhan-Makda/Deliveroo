import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRows = ({id,title,description}) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}} showsHorizontalScrollIndicator={false} className='pt-4'>
        <RestaurantCard id={123} imgUrl='https://links.papareact.com/gn7' title='Yo shushi' rating={4.5} genre='japeneas' address='123 mn st' short_description='heloo hii my name is bhutu' dishes={[]} long={20.44} lat={36.63}/>
        <RestaurantCard id={123} imgUrl='https://links.papareact.com/gn7' title='Yo shushi' rating={4.5} genre='japeneas' address='123 mn st' short_description='heloo hii my name is bhutu' dishes={[]} long={20.44} lat={36.63}/>
        <RestaurantCard id={123} imgUrl='https://links.papareact.com/gn7' title='Yo shushi' rating={4.5} genre='japeneas' address='123 mn st' short_description='heloo hii my name is bhutu' dishes={[]} long={20.44} lat={36.63}/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRows

const styles = StyleSheet.create({})