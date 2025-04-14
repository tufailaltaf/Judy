import { Button, Cart, FlatList, Icon, Image, OrderSummary, Page, Text, TouchableOpacity, View } from '@components'
import React, { useEffect } from 'react'
import { UserProps } from '.'

export const MyCart = (props: UserProps<"MyCart">) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTintColor: '#fff',
      headerTitle: () => (
        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>
          My Cart
        </Text>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name='BackBlack' size='xs' />
        </TouchableOpacity>)
      ,
      headerBackTitleVisible: false,
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerRightContainerStyle: {
        paddingRight: 20
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')}>
          <Icon name='Notification' size='s' />
        </TouchableOpacity>
      ),
      headerShown: true,
      headerTitleAlign: 'center'
    })
  }, [props.navigation])

  return (
    <Page gap padding>
      <FlatList
        data={[1, 2, 3]}
        scrollEnabled={false}
        gap
        renderItem={({ item }) => (
          <Cart />
        )}
      />
      <OrderSummary />
      <View marginTop>
        <Button label='Go To Checkout' onPress={() => props.navigation.navigate('Checkout')} />
      </View>
    </Page>
  )
}
