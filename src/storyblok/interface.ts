export enum Shadow {
  SM = "sm",
  MD = "md",
  LG = "lg",
  NONE = "none",
  DEFAULT = "default",
}

export enum BoxShadow {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XL2 = "2xl",
  INNER = "inner",
  NONE = "none",
  DEFAULT = "DEFAULT",
}

export enum Radius {
  NONE = "none",
  SM = "sm",
  MD = "md",
  LG = "lg",
  DEFAULT = "default",
}

export enum FontWeight {
  THIN = "thin",
  EXTRALIGHT = "extralight",
  LIGHT = "light",
  NORMAL = "normal",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  BOLD = "bold",
  EXTRABOLD = "extrabold",
  BLACK = "black",
}

export enum TextAlign {
  Left = "left",
  Center = "center",
  Right = "right",
  Justify = "justify",
  Start = "start",
  End = "end",
}

export enum TextSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XL2 = "2xl",
  XL3 = "3xl",
  XL4 = "4xl",
  XL5 = "5xl",
  XL6 = "6xl",
  XL7 = "7xl",
  XL8 = "8xl",
  XL9 = "9xl",
}

export enum FontFamily {
  SANS = "sans",
  SERIF = "serif",
  MONO = "mono",
}

export enum Breakpoint {
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export enum GradientDirection {
  TO_T = "to-t",
  TO_TR = "to-tr",
  TO_R = "to-r",
  TO_BR = "to-br",
  TO_B = "to-b",
  TO_BL = "to-bl",
  TO_L = "to-l",
  TO_TL = "to-tl",
}

export enum Color {
  TRANSPARENT = "transparent",
  BACKGROUND = "background",
  FOREGROUND = "foreground",
  DIVIDER = "divider",
  FOCUS = "focus",
  CONTENT1 = "content1",
  CONTENT2 = "content2",
  CONTENT3 = "content3",
  CONTENT4 = "content4",
  DEFAULT = "default",
  DEFAULT_PRIMARY = "primary",
  DEFAULT_SECONDARY = "secondary",
  DEFAULT_SUCCESS = "success",
  DEFAULT_WARNING = "warning",
  DEFAULT_DANGER = "danger",
  PRIMARY_50 = "primary-50",
  PRIMARY_100 = "primary-100",
  PRIMARY_200 = "primary-200",
  PRIMARY_300 = "primary-300",
  PRIMARY_400 = "primary-400",
  PRIMARY_500 = "primary-500",
  PRIMARY_600 = "primary-600",
  PRIMARY_700 = "primary-700",
  PRIMARY_800 = "primary-800",
  PRIMARY_900 = "primary-900",
  SECONDARY_50 = "secondary-50",
  SECONDARY_100 = "secondary-100",
  SECONDARY_200 = "secondary-200",
  SECONDARY_300 = "secondary-300",
  SECONDARY_400 = "secondary-400",
  SECONDARY_500 = "secondary-500",
  SECONDARY_600 = "secondary-600",
  SECONDARY_700 = "secondary-700",
  SECONDARY_800 = "secondary-800",
  SECONDARY_900 = "secondary-900",
  SUCCESS_50 = "success-50",
  SUCCESS_100 = "success-100",
  SUCCESS_200 = "success-200",
  SUCCESS_300 = "success-300",
  SUCCESS_400 = "success-400",
  SUCCESS_500 = "success-500",
  SUCCESS_600 = "success-600",
  SUCCESS_700 = "success-700",
  SUCCESS_800 = "success-800",
  SUCCESS_900 = "success-900",
  WARNING_50 = "warning-50",
  WARNING_100 = "warning-100",
  WARNING_200 = "warning-200",
  WARNING_300 = "warning-300",
  WARNING_400 = "warning-400",
  WARNING_500 = "warning-500",
  WARNING_600 = "warning-600",
  WARNING_700 = "warning-700",
  WARNING_800 = "warning-800",
  WARNING_900 = "warning-900",
  DANGER_50 = "danger-50",
  DANGER_100 = "danger-100",
  DANGER_200 = "danger-200",
  DANGER_300 = "danger-300",
  DANGER_400 = "danger-400",
  DANGER_500 = "danger-500",
  DANGER_600 = "danger-600",
  DANGER_700 = "danger-700",
  DANGER_800 = "danger-800",
  DANGER_900 = "danger-900",
}

export type Size =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

export type Space =
  | 0
  | "px"
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;
