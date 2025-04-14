import { Carousel } from "@fnando/react-native-carousel";
import React, { useRef } from "react";
import { View, DiscountCard, Pressable, Image } from '@components'
import colors from "../../assets/colors";

export const ImageCarousel = () => {
  const carousel: any = useRef();
  return (
    <View  >
      <View  gap>
        <Carousel
          renderIndicator={({ currentPage, index }) => (
            <Pressable
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginTop: 20,
                marginHorizontal: 5,
                backgroundColor: currentPage === index ? colors.light.primary : "#ccc",
              }}
              onPress={() => {
                carousel.current?.goToPage(index + 1);
              }}
            />
          )}
          ref={carousel}>
    <Image src='Slide' aspectRatio={1} width={'100%'} resizeMode='contain' />
    <Image src='Slide' aspectRatio={1} width={'100%'} resizeMode='contain' />
    <Image src='Slide' aspectRatio={1} width={'100%'} resizeMode='contain' />
        </Carousel>
      </View>
    </View>
  );
};
