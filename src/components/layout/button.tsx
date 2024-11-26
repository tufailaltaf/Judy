import { colors, sizes } from "@assets";
import { Pressable, Text } from ".";
import { ButtonProps } from "./types";
import { useFormSubmit } from "../form";
import { ActivityIndicator } from "react-native";

export const Button = ({ style, type= "Solid", ...props }: ButtonProps) => {
    const BorderColor = {
      'Solid': "primary", 
      'Outline' : "title",
      'LightDiscourage' : "errorContainer",
      'Dull': "surfaceVariant",
    }
    const BackgroundColor = {
      'Solid': "primary", 
      'Outline' : "background",
      'LightDiscourage' : "errorContainer",
      'Dull': "surfaceVariant",
    }
    const Color = {
      'Solid' : "buttonText",
      'Outline' : "title",
      'LightDiscourage' : "error",
      'Dull': "onSurfaceVariant",
    }
    const {onPress,Loading} = useFormSubmit(props.submitOnPress,props.onPress)

    
    return (
      <Pressable
        borderWidth={1}
        //@ts-ignore
        borderColor={BorderColor[type]}
        //@ts-ignore
        backgroundColor={BackgroundColor[type]}
        borderRadius={type === 'Solid'?'l':'s'}
        align="mid"
        height={sizes.control.height}
        {...props}
        onPress={onPress}
        shadow
        >
          {Loading?(
            <ActivityIndicator color={colors.light[Color[type]]}/>
          ):(
            <Text
              //@ts-ignore
              color={Color[type]}
              size="h6"
              paddingHorizontal
              text={props.label}
              style={props.texyStyle}
              font="PopinsSemiBold"
            />
          )}
      </Pressable>
    );
  };