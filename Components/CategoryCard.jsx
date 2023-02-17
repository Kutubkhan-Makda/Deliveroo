import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})