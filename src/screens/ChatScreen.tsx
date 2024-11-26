import { FlatList, Icon, Text, TouchableOpacity, View } from '@components'
import React, { useState } from 'react'
import {  TextInput } from 'react-native';

export const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'received' },
    { id: '2', text: 'Hi, How are you?', sender: 'sent' },
  ]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: messageInput,
        sender: 'sent',
      };
      setMessages([newMessage, ...messages]);
      setMessageInput('');
    }
  };

  return (
    <View flex padding>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View
          marginBottom
          borderRadius
          padding
          maxWidth={'80%'}
          backgroundColor={item.sender === 'sent' ? 'primary':'surface'}
          alignSelf={item.sender === 'sent' ? 'flex-end':'flex-start'}
          gap='s'
          shadow
          >
            <Text
              color={item.sender === 'sent' ? 'surface':'onBackground'}
              size='h5'
            >
              {item.text}
            </Text>
            <Text color='AboutBooks' size='small' text={new Date().toLocaleTimeString()} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        inverted // To show the most recent message at the bottom
      />

      <View padding gap style={{backgroundColor:'#f0f0f0'}} borderRadius shadow row space='between'>
      <TouchableOpacity onPress={sendMessage} >
        <Icon name='Attachments' />
    </TouchableOpacity>
        <TextInput
        style={{flex:1}}
          // style={styles.input}
          placeholder="Type a message"
          value={messageInput}
          onChangeText={setMessageInput}
          multiline
          
        />
        <TouchableOpacity onPress={sendMessage} >
        <Icon name='Send' />
    
        </TouchableOpacity>
      </View>
    </View>
  )
}

