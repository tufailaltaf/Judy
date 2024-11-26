import React from 'react'
import { Image, Text, View } from '../layout'
import { colors } from '@assets'

type Props = {
  status?:"Pending" | "In Progress" | "Shipped" | "Delivered" | "Cancelled" | "Returned"
  hideDateTime?:boolean
}

export const BookingCard = (props: Props) => {
  return (
    <View row gap shadow borderRadius padding="s" backgroundColor="surface"  >
    <Image src="Store1" aspectRatio={1} borderRadius="s" />
    <View flex gap="s" row paddingVertical="s" >
      <View flex gap="s" >
        <View gap="xs" >
          <Text font="Bold" >Hair Color Service</Text>
          <Text numberOfLines={1} color="primary" font="Bold">Classique Curls</Text>
        </View>
        <Text font="Bold" size="h6" >AED 61.45</Text>
      </View>
      {!props.hideDateTime &&(<View gap="s" align="mid" paddingHorizontal="s"  style={{
        borderLeftWidth: 0.2,
        borderLeftColor: colors.light.onSurface
      }}>
        <Text color="onSurface" textAlign="center">25 Dec</Text>
        <Text color="onSurface" textAlign="center">08:00PM</Text>
      </View>)}
    </View>
  </View>
  )
}