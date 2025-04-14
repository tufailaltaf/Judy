import React, { useEffect } from 'react'
import { HorizontalCardList, Image, ImageBackground, Page, Text, View, ListHeader, BookList, SearchBar, Header, ChatHeader, BookHeader, FlatList } from '@components'

import { Judy, MovieBooks, PopularBooks } from '@config'
import { Platform } from 'react-native'
import { UserProps } from '.'


export const BookStore = (props: UserProps<'BookStore'>) => {
  useEffect(() => {
    props.navigation.setOptions(
        {
            header: () => <BookHeader />
        }
    )
}, [])
const numColumns = 3;

  return (
    <Page  >
      <SearchBar Home={false} />
      <View padding gap>
        <Text size="h3" font="PopinsSemiBold" color="title" text={'52,000+ Items'} />
      </View>
      <FlatList
        key={numColumns.toString()} // Add this line
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        padding
        paddingTop='xs'
        gap
        data={Judy}
        renderItem={({ item }) => <BookList navigate='BookDetails' cardWidth={116} item={item} cardHeight={190} />}
        numColumns={numColumns}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
      <FlatList
        key={numColumns.toString()} // Add this line
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        padding
   
        gap
        data={Judy}
        style={{marginBottom:120}}
        renderItem={({ item }) => <BookList navigate='BookDetails' cardWidth={116} item={item} cardHeight={190} />}
        numColumns={numColumns}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />

    </Page>
  )
}