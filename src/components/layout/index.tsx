import {
  View as ViewBase,
  Text as TextBase,
  Image as ImageBase,
  Pressable as PressBase,
  ImageBackground as BaseImageBackground,
  FlatList as FlatListBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Animated,
  PressableProps,
  TouchableOpacity as TouchableBase,
  TouchableOpacityProps,
} from 'react-native';
import ReAnimated from 'react-native-reanimated';
import { withStyleProps } from './withStyleProps';
import { colors, fonts, icons, images, sizes } from '@assets';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatListProps, HorizontalCardListProps, IconProps, ImageBackgroundProps, ImageProps, LayoutTextProp, ScrollViewProps, ViewProps } from './types';



export const View = withStyleProps<ViewProps>(ViewBase)();
export const AnimatedView = withStyleProps<ViewProps>(Animated.View)();
export const ReAnimatedView = withStyleProps<ViewProps>(ReAnimated.View)();
export const ImageBackground = withStyleProps<Omit<Omit<Omit<ImageBackgroundProps, "height">, "width">,"borderRadius">>(
  forwardRef(({ src, ...props }, ref) => (
    <BaseImageBackground ref={ref}  {...props} source={props.source || images[src]}/>
  )),
)(options => ({
  style: {
    ...(!!options.conditions.size ? {
      height: options.conditions.size,
      width: options.conditions.size
    } : {})
  },
}));
export const Safe = withStyleProps<ViewProps>(
  forwardRef(({ style, ...props }, ref) => (
    <SafeAreaView style={styles.page}>
      <ViewBase style={[style, styles.page]} {...props} />
    </SafeAreaView>
  )),
)();
export const Page = withStyleProps<ScrollViewProps>(
  forwardRef(({ style, ...props }, ref) => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style}
        style={[styles.page]}
        horizontal={props.row}
        {...props}
      />
    );
  }),
)();
export const Scroll = withStyleProps<ScrollViewProps>(
  forwardRef(({ style, ...props }, ref) => {
    return (
      <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style}
        horizontal={props.row}
        {...props}
        />
        </View>
    );
  }),
)();
export const Strike = ()=>(<View height={1}  backgroundColor="outline"/>)
export const HorizontalCardList = withStyleProps<HorizontalCardListProps>(
  forwardRef(({ style, ListHeaderComponent, ListFooterComponent, ...props }, ref) => {
    return (
      <>
        {ListHeaderComponent &&(<ListHeaderComponent {...props}/>)}
        <FlatListBase
        {...props}
        ListHeaderComponent={props.FirstCard}
        ListFooterComponent={props.LastCard}
        contentContainerStyle={style}
        style={[styles.page]}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        />
        {ListFooterComponent &&(<ListFooterComponent {...props}/>)}
      </>
    );
  }),
)((options) => ({
  style: {
    flexDirection: "row",
    paddingHorizontal: options.sizes.layout.b,
    gap: options.sizes.layout.b
  }
}));
export const FlatList = withStyleProps<FlatListProps>(
  forwardRef(({style, ...props }, ref) => {
    return (
        <FlatListBase
        {...props}
        ref={ref}
        style={[!!props.page&&styles.page]}
        contentContainerStyle={style}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        />
    );
  }),
)();
export const Pressable = withStyleProps<PressableProps>(PressBase)();
export const TouchableOpacity = withStyleProps<TouchableOpacityProps>(TouchableBase)();
export const Image = withStyleProps<Omit<Omit<Omit<ImageProps, "height">, "width">,"borderRadius">>(
  forwardRef(({ src, ...props }, ref) => {
    return <ImageBase ref={ref} {...props} source={props.source || images[src]} />;
  }),
)(options => ({
  style: {
    ...(!!options.conditions.size ? {
      height: options.conditions.size,
      width: options.conditions.size
    } : {}),
    ...(!!options.conditions.fill ? {
      height: "100%",
      width: "100%"
    } : {})
  },
}));
export const Icon = withStyleProps<IconProps>(
  forwardRef(({ name, ...props }, ref) => {
    return <ImageBase ref={ref} resizeMode="contain" {...props} source={props.source || icons[name]} />;
  }),
)(options => ({
  style: {
    height: sizes.icon[options.conditions.size||"s"],
    width: sizes.icon[options.conditions.size||"s"],
    tintColor: options.colors[options.conditions.color]
  },
}));
export const Text = withStyleProps<LayoutTextProp>(
  forwardRef(function (prop, ref) {
    const { t, i18n } = useTranslation();
    return (<TextBase  {...prop} ref={ref} >
      {/* {!!prop.text?t("common:"+prop.text):""}{prop.children || ""} */}
      {prop.text||""}{prop.children || ""}
    </TextBase>);
  }),
)(options => ({
  style: {
    fontFamily: !!options.conditions.font
      ? options.fonts[options.conditions.font as keyof typeof fonts]
      : options.fonts.Regular,
    fontSize: !!options.conditions.size
      ? options.sizes.text[options.conditions.size as keyof typeof sizes.text]
      : sizes.text.body,
    color: !!options.conditions.color
      ? options.colors[options.conditions.color as keyof typeof colors.light]
      : options.colors.onBackground,
    textAlign: options.conditions.textAlign == 'center' ? 'center' : undefined,
    textDecorationLine:options.conditions.line,
  },
}));

const styles = StyleSheet.create({
  page: { flex: 1 },
});

export * from "./parallax"
export * from "./button"
