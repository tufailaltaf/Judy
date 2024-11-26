import { Button, Icon, Image, OrderSummary, Page, Pressable, SelectedButton, Strike, Text, TouchableOpacity, View } from '@components'
import React, { useEffect } from 'react'
import { UserProps } from '.'
import { buttons } from '@config'
import { TextInput } from 'react-native'

export const Checkout = (props: UserProps<'Checkout'>) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTintColor: '#fff',
      headerTitle: () => <
        Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>
        My Cart
      </Text>
      ,
      headerLeft: () =>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name='BackBlack' size='xs' />
        </TouchableOpacity>,
      headerBackTitleVisible: false,
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      // headerTransparent: true,
      headerRightContainerStyle: {
        paddingRight: 20
      },
      headerRight: () =>
        <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')}>
          <Icon name='Notification' size='m' />
        </TouchableOpacity>,
      headerShown: true,
      headerTitleAlign: 'center'
    })
  }, [])
  return (
    <Page padding gap>
      <Strike />
      <View row space='between' align='center'>
        <Text font='PopinsMedium' size='h5' text='Delivery Address' />
        <Text font='PopinsRegular' size='h6' text='Change' line='underline' />
      </View>
      <View row gap >
        <Icon name='Location' size='m' />
        <View gap='xs'>
          <Text font='PopinsMedium' text='Home' />
          <Text font='PopinsRegular' color='light' text='925 S Chugach St #APT 10, Alaska 99645' />
        </View>
      </View>
      <Text text='Payment Method' font='PopinsMedium' size='h5' />
      <View row space='between'>
        <Image src='Card' width={90} height={35} borderRadius='s' />
        <Image src='Cash' width={90} height={35} borderRadius='s' borderWidth={0.4} />
        <Image src='ApplePay' width={90} height={35} borderRadius='s' borderWidth={0.4} />
      </View>
      <View row space='between' align='center' backgroundColor='surface' borderWidth={0.4} paddingHorizontal borderRadius='s' >
        <View row gap='xs' align='center'>
          <Icon name='Visa' size='l' />
          <Text text='**** **** **** 2512' />
        </View>
        <Icon name='Edit' size='s' />
      </View>
      <Text text='Order Summary' font='PopinsMedium' size='h5' />
      <OrderSummary />

      <View align='center' row gap>
        <View row gap height={50} borderWidth={0.4} width={'80%'} borderRadius='s' paddingHorizontal='s' align='center'>
          <Icon name='Promo' size='s' />
          <TextInput id='promo' placeholder='Promo Code' />
        </View>
        <Pressable onPress={() => props.navigation.pop(2)} backgroundColor='primary' borderRadius='s' padding>
          <Text text='Add' color='surface' font='PopinsMedium' />
        </Pressable>
      </View>
    </Page>
  )
}
