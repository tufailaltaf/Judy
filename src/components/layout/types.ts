import { BaseColorType, IconSourceType, colors, fonts, sizes } from "@assets";
import { 
    ViewProps as ViewBaseProps,
    TextProps as TextBaseProps,
    ScrollViewProps as ScrollViewBaseProps,
    ImageBackgroundProps as BaseImageBackgroundProps,
    ImageProps as ImageBaseProps,
    FlatListProps as FlatListBaseProps,
    PressableProps,
    FlexAlignType,
    TextStyle,


} from "react-native";
import images from "../../assets/images";



export type ViewProps = ViewBaseProps
export type TextProps = TextBaseProps
export type ScrollViewProps = ScrollViewBaseProps
export interface LayoutTextProp extends Omit<TextProps, 'children'> {
    font?: keyof typeof fonts.en;
    size?: keyof typeof sizes.text;
    color?: BaseColorType;
    textAlign?: 'center';
    text?: string;
    line?: | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
    children?: React.ReactNode | undefined
}
export interface HorizontalCardListProps extends FlatListBaseProps<any> {
    FirstCard?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
    LastCard?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}
export interface FlatListProps extends FlatListBaseProps<any> {
    page?: Boolean
}
export type ButtonTypes = 'Solid' | 'Outline' | 'Dull' | "LightDiscourage"
export interface ButtonProps extends PressableProps {
    type?: ButtonTypes;
    label: string;
    submitOnPress?: boolean;
    texyStyle?:TextStyle
}
export type ImageProps = {
    serverPath?: string;
    src?: keyof typeof images;
    size?: number | `${number}%`;
    fill?: boolean;
} & Omit<ImageBaseProps, 'src'>;
export type ImageBackgroundProps = {
    src?: keyof typeof images;
    size?: number | `${number}%`;
} & Omit<BaseImageBackgroundProps, 'src'>;
export type IconProps = {
    name: IconSourceType;
    color?: BaseColorType;
    size?: keyof typeof sizes.icon;
} & Omit<ImageBaseProps, 'src'>;

export type LayoutType = true | keyof typeof sizes.layout
export type StyleProps<Props> = {
    row?: boolean;

    flex?: boolean | number;

    styleName?: ""

    backgroundColor?: keyof typeof colors.light;
    borderColor?: keyof typeof colors.light;

    align?: 'center' | 'left' | 'right' | 'middle' | 'mid' | 'top' | 'bottom';
    space?: 'between' | 'evenly' | 'around';
    borderWidth?: number;
    aspectRatio?: number;
    
    absolute?: boolean;

    minHeight?: number | `${number}%`;
    minWidth?: number | `${number}%`;

    maxHeight?: number | `${number}%`;
    maxWidth?: number | `${number}%`;

    height?: number | `${number}%`;
    width?: number | `${number}%`;

    gap?: LayoutType;

    shadow?: boolean;

    borderRadius?: LayoutType;
    
    top?:  number | `${number}%`;
    bottom?:  number | `${number}%`;
    left?:  number | `${number}%`;
    right?:  number | `${number}%`;

    margin?: LayoutType;
    marginTop?: LayoutType;
    marginBottom?: LayoutType;
    marginLeft?: LayoutType;
    marginRight?: LayoutType;
    marginVertical?: LayoutType;
    marginHorizontal?: LayoutType;

    padding?: LayoutType;
    paddingTop?: LayoutType;
    paddingBottom?: LayoutType;
    paddingLeft?: LayoutType;
    paddingRight?: LayoutType;
    paddingVertical?: LayoutType;
    paddingHorizontal?: LayoutType;

    alignSelf?: FlexAlignType;

} & Props