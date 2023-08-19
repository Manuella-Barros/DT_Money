import { defaultTheme } from "../themes/defaultTheme";
import { DefaultTheme } from 'styled-components';

type currentTheme = typeof defaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends currentTheme{}
}