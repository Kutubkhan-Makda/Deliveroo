import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15,paddingTop:10}}>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})