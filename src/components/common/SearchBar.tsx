import { Icon, Text, TextInput, View } from '@components'
import React from 'react'

export const SearchBar = ({Home}:{Home:boolean}) => {
  return (
    <View padding>
        <TextInput
          placeholder='Search here...'
          type='text'
          right={() => (<Icon name='Search' size='xs' />)}
          purpose='Search'
        />
    </View>

  )
}