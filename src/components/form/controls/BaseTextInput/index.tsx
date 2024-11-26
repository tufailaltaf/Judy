import React, {forwardRef, useRef, useState} from 'react';
import {AnimatedView, ReAnimatedView, Text, View} from '../../../layout';
import {
  Animated,
  TextInput,
  TextInputProps,
  useAnimatedValue,
} from 'react-native';
import {colors, fonts, sizes, useStyle} from '@assets';

export interface BaseTextInputProps extends TextInputProps {
  id?:string;
  next?:string;
  focusDisable?:boolean;
  error?:string[]
  left?: () => JSX.Element;
  right?: () => JSX.Element;
  label?:string
  purpose?:string
}

export const BaseInput = forwardRef(({editable=true,focusDisable=false,...props}: BaseTextInputProps, ref) => {
  
  const Focus = useRef(new Animated.Value(0)).current;
  const [style] = useStyle(({colors, fonts, sizes}) => ({
    textInput: {
      flex: 1,
      color:  props.purpose === 'Search' || props.purpose === 'name' ? colors.onBackground: editable? colors.onPrimary:  colors.onSurface,
      fontFamily: fonts.PopinsRegular,
      fontSize: sizes.text.h6,
    },
    container: {
      
      //@ts-ignore
      
      backgroundColor: props.purpose === 'Search' || props.purpose === 'name'  ?  Focus.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.control, colors.background],
      }):null,
      // @ts-ignore
      borderBottomWidth: 1,
      borderBottomColor: props.purpose === 'Search' || props.purpose === 'name'  ? 
      Focus.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.onPrimary, colors.primary],
      })
      
      : Focus.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.onPrimary, colors.translucentBackground],
      }),
      
    },
  }));
  return (
    <View gap="s" >
    {!!props.label&&(<Text font="PopinsRegular" color='onPrimary' >{props.label}</Text>)}
    <AnimatedView
      row
      height={props.multiline?120:sizes.control.height}
      
      // borderWidth={1}
      borderRadius={props.purpose === 'Search'? 'xl' :props.purpose=== 'name' ? 'b' : 's'}
      paddingHorizontal
      shadow={props.purpose === 'Search'? true : false}
      //@ts-ignore
      style={style.container}
      gap>
        <View align="mid">
      {props.left?.()}
        </View>
      <TextInput
        {...props}
        returnKeyType={props.multiline? "default" :!!props.next?"next":"done"}
        editable={editable && !focusDisable}
        placeholderTextColor={colors.light.onSurfaceVariant}
        onFocus={() => {
          Animated.timing(Focus, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
        
        onBlur={() => {
          Animated.timing(Focus, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
        style={[style.textInput,{
          textAlignVertical:"top",
        }]}
        ref={ref}
      />
      <View align="mid">
      {props.right?.()}
      </View>
    </AnimatedView>
    {!!props.error&&!!props.error.length&&(
      <ReAnimatedView>
      <Text font="Bold" size="small" color="error" paddingHorizontal >{props.error[0]}</Text>
      </ReAnimatedView>
      )}
    </View>
  );
});
