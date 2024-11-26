import { DateTimePicker, FlatList, Header, Page, Text, TextInput, View } from '@components'
import React, { useEffect, useState } from 'react'
import { UserProps } from '.'
import { Switch } from 'react-native';
const labels = ['Sales', 'New arrivals', 'Delivery status changes'];

export const EditProfile = (props: UserProps<"EditProfile">) => {
    const [switchStates, setSwitchStates] = useState(Array(labels.length).fill(false));

    const toggleSwitch = (index: number) => {
        const newSwitchStates = [...switchStates];
        newSwitchStates[index] = !newSwitchStates[index];
        setSwitchStates(newSwitchStates);
    };
    useEffect(() => {
        props.navigation.setOptions(
            {
                header: () => <Header text='Settings' />
            }
        )
    }, [])
    return (
        <Page gap padding>
            <Text text='Personal Information' font='PopinsMedium' size='h5' />
            <TextInput purpose='name' placeholder='First Name' />
            <DateTimePicker editable purpose='name' placeholder='Date of Birth' />
            <View row space='between' align='center'>
                <Text font='PopinsMedium' size='h6' text='Password' />
                <Text font='PopinsRegular' color='light' text='Change' />
            </View>
            <TextInput purpose='name' type='password' placeholder='Password' />
            <Text font='PopinsMedium' size='h5' text='Notifications' />
            <FlatList
                data={labels}
                gap
                scrollEnabled={false}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View flex align='center' row padding='s' paddingHorizontal space='between'>
                        <Text color='title' size='h6' font='PlusJakartaSemiBold'>{item}</Text>
                        <Switch
                            trackColor={{ false: '#84878c', true: '#e8e8e8' }}
                            thumbColor={switchStates[labels.indexOf(item)] ? '#0BB4BF' : '#e8e8e8'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => toggleSwitch(labels.indexOf(item))}
                            value={switchStates[labels.indexOf(item)]}
                        />
                    </View>
                )}
            />
        </Page>
    )
}
