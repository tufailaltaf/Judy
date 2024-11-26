import React, { Component, useRef, useState } from 'react';
import { TouchableWithoutFeedback, TextInput as NativeTextInput } from 'react-native';
import { BaseInput, BaseTextInputProps } from '../BaseTextInput';
import Country from './country';
import Flags from './resources/flags';
import PhoneNumber from './phoneNumber';
import styles from './styles';
import { BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Image, Pressable, Text, View } from '../../../layout';
import flags from './resources/flags';
import { colors, sizes } from '@assets';
import { useForm } from '../../wrapper';
import phoneNumber from './phoneNumber';
import { TextInput } from '../TextInput';


export const PhoneInput = ({ initialCountry = "us", ...props }: BaseTextInputProps) => {
  const textInput = useRef<NativeTextInput>(null)
  const bottomSheetModal = useRef<BottomSheetModal>(null)
  const [Search, setSearch] = useState("")
  const { form, Value, setValue,Error } = useForm({
    id: props.id,
    initialValue: props.value?{
      iso2: phoneNumber.getCountryCodeOfNumber(props.value),
      formattedNumber: props.value,
      value: props.value,

    }: {
      iso2: initialCountry,
      formattedNumber: `+${PhoneNumber.getCountryDataByCode(initialCountry).dialCode}`,
      value: null,
    },
    focus: () => {
      textInput.current.focus()
    },
    validate(v, form) {
      if(!phoneNumber.isValidNumber(v.formattedNumber)){
        return ["Please provide a valid phone number."]
      }
      return[]
    },
  })
  const updateFlagAndFormatNumber = (number: string) => {
    setValue(
      s => ({
        ...s,
        iso2: phoneNumber.getCountryCodeOfNumber(number),
        formattedNumber: number, inputValue: number
      })

    );
  }
  return (
    <>
      <BaseInput
        ref={textInput}
        keyboardType="phone-pad"
        onChangeText={text => {
          updateFlagAndFormatNumber(text);
        }}
        error={Error}
        autoCorrect={false}
        left={() => (
          <TouchableWithoutFeedback
            onPress={() => bottomSheetModal.current?.present()}
          disabled={!props.editable}
          >
            <Image
              source={Flags.get(Value.iso2)}
              style={[styles.flag,]}
            />
          </TouchableWithoutFeedback>
        )}
        {...props}
        value={Value?.formattedNumber}
      />
      <BottomSheetModal
        ref={bottomSheetModal}
        index={0}
        handleIndicatorStyle={{ backgroundColor: colors.light.background }}
        snapPoints={['100%']}>
        <View padding gap paddingTop="xl">
          <View row space="between">

            <Text
              size="h3"
              font="Bold"
              text="SelectCountry"
            />
            <Text
              size="h3"
              font="Bold"
              color="onBackground"
              text="✕"
              onPress={() => bottomSheetModal.current?.close()}
            />

          </View>
          <TextInput value={Search} placeholder='Search'
            onChangeText={(a) => setSearch(a)}
          // right={() => Search == "" ? (<></>) : (<Text size="h4" text="✕" onPress={() => setSearch("")} />) }
          />
        </View>
        <BottomSheetFlatList
          style={{ backgroundColor: colors.light.background }}
          data={(() => {
            const search = Search.toLocaleLowerCase()
            return Country.getAll().filter(s => s.lowerCaseName.includes(search))
          })()}

          keyExtractor={i => i.iso2}
          renderItem={({ item }) => (
            <Pressable onPress={() => {
              bottomSheetModal.current?.close()
              setValue(s => ({
                ...s,
                iso2: item.iso2,
                formattedNumber: `+${item.dialCode}`,
                inputValue: `+${item.dialCode}`,
              }))
            }} row align="mid">
              <Image
                source={flags.get(item.iso2)}
                marginHorizontal
                height={20}
                width={40}
              />
              <Text size="h6" flex>
                {item.name}
              </Text>
            </Pressable>
          )}
          contentContainerStyle={{
            padding: sizes.layout.s,
            gap: sizes.layout.b,
          }}
        />
      </BottomSheetModal>
    </>
  )
}

