import React from 'react'
import { HorizontalCardList, Image, ImageBackground, Page, Text, View, ListHeader, BookList, SearchBar, FlatList, DiscountCard, SelectedButton, } from '@components'
import { UserTabType } from '.'
import { banner, buttons, Judy, Small } from '@config'
import { ImageCarousel } from '../../components/common/Carousel'
import InstaStory from 'react-native-insta-story'


export const Home = () => {
  const numColumns = 3;
  return (
    <Page gap>
    
       {/* <InstaStory
      data={Small}
      duration={10}
      customSwipeUpComponent={
        <View>
          <Text>Swipe</Text>
        </View>
      }
    /> */}
      <HorizontalCardList
        data={banner}
        keyExtractor={item => item.id}
        // ListHeaderComponent={() => <ListHeader title="Recommendation" hasMore/>}
        renderItem={({ item }) => <DiscountCard      />}
      />
        <View padding row space='between'>
          {/* <FlatList
          data={buttons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <SelectedButton item={item} />}
        /> */}
      {
        buttons.map((item, index) => (
            <SelectedButton  item={item} key={index} />
          ))
        }
        </View>
      <FlatList
        key={numColumns.toString()} // Add this line
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        padding
        paddingTop='xs'
        gap
        data={Judy}
        style={{marginBottom:120}}
        ListHeaderComponent={() => <ListHeader title="Judy Robinson Book" hasMore/>}
        renderItem={({ item }) => <BookList navigate='BookDetails' cardWidth={116} item={item} cardHeight={190} />}
        numColumns={numColumns}
        keyExtractor={item => item.id}
      />

    
    </Page>
  )
}