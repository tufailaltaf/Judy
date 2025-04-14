import React, { ComponentType, forwardRef } from 'react'
import { createStyle, sizes, useStyle } from '@assets';
import { LayoutType, StyleProps } from './types';

const alignStyle = {
    mid: {
        justifyContent: "center",
        alignItems: "center",
    },
    middle: {
        justifyContent: "center",
    },
    center: {
        alignItems: "center",
    },
    left: {
        alignItems: "flex-start",
    },
    right: {
        alignItems: "flex-end",
    },
    top: {
        alignItems: "flex-start",
    },
    bottom: {
        justifyContent: "flex-end",
    },
}
const getLayout = (n?: LayoutType) => !!n ? n === true ? sizes.layout["b"] : sizes.layout[n] : undefined
export function withStyleProps<Props>(Component: ComponentType<Props>) {
    const defaultCustomStyle = createStyle(() => ({ style: {} }))
    const withStyle: (s?: typeof defaultCustomStyle) => React.FC<StyleProps<Props>> = (createdStyle = defaultCustomStyle) => {
        // const Styled =
        //  memo(
        return forwardRef(function (props, ref) {
            const {
                row,
                flex,
                backgroundColor,
                align,
                space,

                borderWidth,
                borderColor,
                borderRadius,
                aspectRatio,

                top,
                bottom,
                left,
                right,

                margin,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                marginVertical,
                marginHorizontal,

                padding,
                paddingTop,
                paddingBottom,
                paddingLeft,
                paddingRight,
                paddingVertical,
                paddingHorizontal,
                gap,
                alignSelf,

                shadow,

                height,
                width,

                minHeight,
                minWidth,

                maxHeight,
                maxWidth,
                absolute,
                style: providedStyle,
                ...restProps
            } = props

            const [styles, o, t] = useStyle((options) => ({
                style: {

                    ...(!!shadow ? {
                        backgroundColor: options.colors.background,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    } : {}),
                    flexDirection: row ? "row" : undefined,
                    justifyContent: !!space ? `space-${space}` : undefined,
                    flex: flex ? 1 : undefined,
                    position: absolute ? "absolute" : undefined,
                    height,
                    width,
                    minHeight,
                    minWidth,
                    maxHeight,
                    maxWidth,
                    aspectRatio,
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    gap: getLayout(gap),
                    margin: getLayout(margin),
                    marginTop: getLayout(marginTop),
                    marginBottom: getLayout(marginBottom),
                    marginLeft: getLayout(marginLeft),
                    marginRight: getLayout(marginRight),
                    marginVertical: getLayout(marginVertical),
                    marginHorizontal: getLayout(marginHorizontal),
                    padding: getLayout(padding),
                    paddingTop: getLayout(paddingTop),
                    paddingBottom: getLayout(paddingBottom),
                    paddingLeft: getLayout(paddingLeft),
                    paddingRight: getLayout(paddingRight),
                    paddingVertical: getLayout(paddingVertical),
                    paddingHorizontal: getLayout(paddingHorizontal),
                    borderRadius: getLayout(borderRadius),
                    backgroundColor: !!backgroundColor ? options.colors[backgroundColor] : undefined,
                    borderColor: !!borderColor ? options.colors[borderColor] : undefined,
                    alignSelf,
                    borderWidth,
                    ...(!!align ? alignStyle[align] : {}),
                },
            }))
            const [componentStyle] = !!createdStyle ? useStyle(createdStyle, props) : [{ style: null }]
            return (
                <Component
                    {...(restProps as any)}
                    row={row}
                    t={t}
                    style={[styles.style, componentStyle.style, providedStyle,]}
                    ref={ref as any}
                />
            )
        })
        // !! Open this code for memoization
        // , (prev, next) => {
        //     if (__DEV__)return false
        //     for (let index = 0; index < WatchProps.length; index++) {
        //         if (prev[WatchProps[index]] !== next[WatchProps[index]]) { return false }
        //     }
        // })

        // return Styled
    }

    return withStyle
}
