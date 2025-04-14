import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { View } from '.';

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;
const HEADER_HEIGHT = 250

export default function ParallaxScrollView({
  children,
  headerImage,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <View flex>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} 
      showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.header,
            // { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <View 
        flex
        
        backgroundColor="background"
        style={styles.content}
        >{children}</View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    overflow: 'hidden',
    paddingBottom:124,
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
