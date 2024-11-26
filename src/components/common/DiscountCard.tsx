import { View, Text, Image, Button, Pressable, ImageBackground, TouchableOpacity } from '@components'
export const DiscountCard = () => {
  return (
    <ImageBackground  width={362} height={150}  style={{overflow:'hidden'}} borderRadius src='Banner' >
      <View  row >
        <View padding gap='s' paddingVertical>
          <Text color="surface" width={200} font='OpenSansBold' size="h4" text="Get Unlimited Access To Books in Just" />
          <Text color="surface" font='OpenSansBold' size="body" text="$99.99" />
          <TouchableOpacity backgroundColor='surface' width={90} borderRadius='s' padding='s' >
            <Text color="title" textAlign='center' font='OpenSansSemiBold' size="body" text="Shop Now" />
          </TouchableOpacity>
        </View>
      </View>
  
    </ImageBackground>
  )
}