import React from 'react'
import { HorizontalCardList, Image, ImageBackground, Page, Text, View, ListHeader, BookList, SearchBar } from '@components'
// import { UserTabProps } from '.'
import { MovieBooks, PopularBooks } from '../../config/dummyData'


export const Category = () => {
  return (
    <Page paddingVertical paddingBottom='xl'>
    <SearchBar Home={false} />
    <View padding gap>
      <Text size="h3" font="PopinsSemiBold" color="title" text={'Your Favourite Books'} />
      <View flex row gap>
        <Image src='Art' flex aspectRatio={174 / 88} borderRadius />
        <Image src='Crime' flex aspectRatio={174 / 88} borderRadius />
      </View>
      <View flex row gap>
        <Image src='Fiction' flex aspectRatio={174 / 88} borderRadius />
        <Image src='History' flex aspectRatio={174 / 88} borderRadius />
      </View>
    </View>
    <HorizontalCardList
      data={PopularBooks}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <ListHeader padding={true} title="Popular List" />}
      renderItem={({ item }) => <BookList navigate='BookDetails' cardWidth={120} item={item} />}
    />
    <HorizontalCardList
      keyExtractor={item => item.id}
      data={MovieBooks}
      ListHeaderComponent={() => <ListHeader padding={true} title="Books That Should Be Mode Into Movie" />}
      renderItem={({ item }) => <BookList navigate='BookDetails' cardWidth={120} item={item} />}
    />

  </Page>
  )
}