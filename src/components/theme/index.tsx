import i18next from 'i18next';
import React, { PropsWithChildren, createContext, useContext } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next';
import { ColorSchemeName, Dimensions, I18nManager, ImageStyle, Platform, ScaledSize, TextStyle, ViewStyle, useColorScheme } from 'react-native'
import Language from '../../assets/language';

export function createTheme<ColorType, ImageType, IconType, FontType, languageNamespace>(options: {
    colors: {
        light: ColorType;
        dark?: ColorType;
    }
    images: ImageType;
    icons: IconType;
    fonts: {
        [language: string]: FontType
    };
    
    sizeBase: number
}) {
    const language: {
        [other: "en" | string]: languageNamespace
    } = Language;
    type ContextType = {
        orientation: string;
        colorScheme: ColorSchemeName;
        window: ScaledSize;
        setUserColorScheme?: (setting: ColorSchemeName | "system") => any;
        lang: "en" | "ar"
        isRTL: boolean;
        isDark: boolean;
        isIOS: boolean;
    }
    type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
    type CallbackType<T> = (
        options: ContextType & {
            colors: ColorType;
            fonts: FontType;
            sizes: typeof sizes
            conditions: any;
        }
    ) => NamedStyles<T>;
    const dimension = Dimensions.get("window");

    const sizes = Object.freeze({
        screen: {
            ...dimension,
            height:
                dimension.height > dimension.width ? dimension.height : dimension.width,
            width:
                dimension.height > dimension.width ? dimension.width : dimension.height,
        },
        doubleBase: options.sizeBase,
        base: options.sizeBase,
        halfBase: options.sizeBase,
        control: {
            height: 48,
        },
        card: {
            borderRadius: 12,
        },
        maxWidthOfContent: 520,
        borderRadius: 16,
        innerBorderRadius: 12,
        text: {
            h1: options.sizeBase * 1.875,       //30
            h2: options.sizeBase * 1.5,         //24
            h3: options.sizeBase * 1.3125,      //21
            h4: options.sizeBase * 1.125,       //18
            h5: options.sizeBase,               //16
            h6: options.sizeBase / 1.125,       //14
            body: options.sizeBase / 1.3125,      //12
            small: options.sizeBase / 1.5,         //10
        },
        layout: {
            xl: options.sizeBase * 4,
            l: options.sizeBase * 2,
            b: options.sizeBase,
            s: options.sizeBase / 2,
            xs: options.sizeBase / 4,
        },
        icon: {
            xxs: options.sizeBase * 0.5,
            xs: options.sizeBase,
            s: options.sizeBase * 1.5,
            m: options.sizeBase * 2,
            l: options.sizeBase * 3,
            xl: options.sizeBase * 4
        },
    });

    const defaults: ContextType = {
        orientation: "PORTRAIT",
        colorScheme: "light",
        window: Dimensions.get("window"),
        setUserColorScheme: (d) => { },
        lang: "en",
        isDark: false,
        isRTL: false,
        isIOS: Platform.OS == "ios",
    };

    const Context = createContext<ContextType>(defaults)
    function ThemeProvider(props: PropsWithChildren) {
        const systemColorScheme = useColorScheme()
        const {t, i18n} = useTranslation();
        // const s = useWindowDimensions()
        return (
            <Context.Provider value={{ ...defaults,
                lang:i18n.language,
            colorScheme: systemColorScheme }}>
                {props.children}
            </Context.Provider>
        )
    }
    function useStyle<t>(
        callback: CallbackType<t>,
        conditions = []
    ): [NamedStyles<t>, typeof options] {
        const theme = useContext(Context);
        
        return [
                callback({
                    ...theme,
                    colors: !options.colors.dark ? options.colors.light : options.colors[theme.colorScheme || "light"] as ColorType,
                    fonts: options.fonts[theme.lang] || options.fonts.en,
                    sizes,
                    conditions
                })
            ,
            options,
            theme.t
        ]
    }
    function createStyle<t>(callback: CallbackType<t>): CallbackType<t> {
        return callback;
    }


    i18next.use(initReactI18next) // passes i18n down to react-i18next
        .init({
            compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
            resources: language,
            lng: I18nManager.isRTL ? "ar" : 'en', // default language to use.
            // if you're using a language detector, do not define the lng option
            interpolation: {
                escapeValue: false,
            },
        });


    return {
        ...options,
        ThemeProvider,
        createStyle,
        useStyle,
        sizes
    }
}

