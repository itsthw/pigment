import { Color, GlobalVariant, GlobalVariantMap } from "./types";

// TODO: dark mode support
const globalVariants: GlobalVariantMap = {
  solid: {
    gray: {
      base: "text-white bg-gray-600 border-gray-600",
      hover: "hover:bg-gray-700 hover:border-gray-700",
      active: "active:bg-gray-800 active:border-gray-800",
      disabled: "",
    },
    mauve: {
      base: "text-white bg-mauve-600 border-mauve-600",
      hover: "hover:bg-mauve-700 hover:border-mauve-700",
      active: "active:bg-mauve-800 active:border-mauve-800",
      disabled: "",
    },
    slate: {
      base: "text-white bg-slate-600 border-slate-600",
      hover: "hover:bg-slate-700 hover:border-slate-700",
      active: "active:bg-slate-800 active:border-slate-800",
      disabled: "",
    },
    sage: {
      base: "text-white bg-sage-600 border-sage-600",
      hover: "hover:bg-sage-700 hover:border-sage-700",
      active: "active:bg-sage-800 active:border-sage-800",
      disabled: "",
    },
    olive: {
      base: "text-white bg-olive-600 border-olive-600",
      hover: "hover:bg-olive-700 hover:border-olive-700",
      active: "active:bg-olive-800 active:border-olive-800",
      disabled: "",
    },
    sand: {
      base: "text-white bg-sand-600 border-sand-600",
      hover: "hover:bg-sand-700 hover:border-sand-700",
      active: "active:bg-sand-800 active:border-sand-800",
      disabled: "",
    },
    maroon: {
      base: "text-white bg-maroon-600 border-maroon-600",
      hover: "hover:bg-maroon-700 hover:border-maroon-700",
      active: "active:bg-maroon-800 active:border-maroon-800",
      disabled: "",
    },
    orange: {
      base: "text-white bg-orange-600 border-orange-600",
      hover: "hover:bg-orange-700 hover:border-orange-700",
      active: "active:bg-orange-800 active:border-orange-800",
      disabled: "",
    },
    amber: {
      base: "text-sand-900 bg-amber-400 border-amber-400",
      hover: "hover:bg-amber-500 hover:border-amber-500",
      active: "active:bg-amber-600 active:border-amber-600",
      disabled: "",
    },
    yellow: {
      base: "text-sand-900 bg-yellow-400 border-yellow-400",
      hover: "hover:bg-yellow-500 hover:border-yellow-500",
      active: "active:bg-yellow-600 active:border-yellow-600",
      disabled: "",
    },
    lime: {
      base: "text-olive-900 bg-lime-400 border-lime-400",
      hover: "hover:bg-lime-500 hover:border-lime-500",
      active: "active:bg-lime-600 active:border-lime-600",
      disabled: "",
    },
    green: {
      base: "text-white bg-green-600 border-green-600",
      hover: "hover:bg-green-700 hover:border-green-700",
      active: "active:bg-green-800 active:border-green-800",
      disabled: "",
    },
    emerald: {
      base: "text-white bg-emerald-600 border-emerald-600",
      hover: "hover:bg-emerald-700 hover:border-emerald-700",
      active: "active:bg-emerald-800 active:border-emerald-800",
      disabled: "",
    },
    teal: {
      base: "text-white bg-teal-600 border-teal-600",
      hover: "hover:bg-teal-700 hover:border-teal-700",
      active: "active:bg-teal-800 active:border-teal-800",
      disabled: "",
    },
    cyan: {
      base: "text-white bg-cyan-600 border-cyan-600",
      hover: "hover:bg-cyan-700 hover:border-cyan-700",
      active: "active:bg-cyan-800 active:border-cyan-800",
      disabled: "",
    },
    sky: {
      base: "text-white bg-sky-600 border-sky-600",
      hover: "hover:bg-sky-700 hover:border-sky-700",
      active: "active:bg-sky-800 active:border-sky-800",
      disabled: "",
    },
    blue: {
      base: "text-white bg-blue-600 border-blue-600",
      hover: "hover:bg-blue-700 hover:border-blue-700",
      active: "active:bg-blue-800 active:border-blue-800",
      disabled: "",
    },
    indigo: {
      base: "text-white bg-indigo-600 border-indigo-600",
      hover: "hover:bg-indigo-700 hover:border-indigo-700",
      active: "active:bg-indigo-800 active:border-indigo-800",
      disabled: "",
    },
    violet: {
      base: "text-white bg-violet-600 border-violet-600",
      hover: "hover:bg-violet-700 hover:border-violet-700",
      active: "active:bg-violet-800 active:border-violet-800",
      disabled: "",
    },
    purple: {
      base: "text-white bg-purple-600 border-purple-600",
      hover: "hover:bg-purple-700 hover:border-purple-700",
      active: "active:bg-purple-800 active:border-purple-800",
      disabled: "",
    },
    fuchsia: {
      base: "text-white bg-fuchsia-600 border-fuchsia-600",
      hover: "hover:bg-fuchsia-700 hover:border-fuchsia-700",
      active: "active:bg-fuchsia-800 active:border-fuchsia-800",
      disabled: "",
    },
    pink: {
      base: "text-white bg-pink-600 border-pink-600",
      hover: "hover:bg-pink-700 hover:border-pink-700",
      active: "active:bg-pink-800 active:border-pink-800",
      disabled: "",
    },
    rose: {
      base: "text-white bg-rose-600 border-rose-600",
      hover: "hover:bg-rose-700 hover:border-rose-700",
      active: "active:bg-rose-800 active:border-rose-800",
      disabled: "",
    },
    red: {
      base: "text-white bg-red-600 border-red-600",
      hover: "hover:bg-red-700 hover:border-red-700",
      active: "active:bg-red-800 active:border-red-800",
      disabled: "",
    },
  },
  soft: {
    gray: {
      base: "text-gray-900 bg-gray-100 border-gray-100",
      hover: "hover:bg-gray-200 hover:border-gray-200",
      active: "active:bg-gray-300 active:border-gray-300",
      disabled: "",
    },
    mauve: {
      base: "text-mauve-900 bg-mauve-100 border-mauve-100",
      hover: "hover:bg-mauve-200 hover:border-mauve-200",
      active: "active:bg-mauve-300 active:border-mauve-300",
      disabled: "",
    },
    slate: {
      base: "text-slate-900 bg-slate-100 border-slate-100",
      hover: "hover:bg-slate-200 hover:border-slate-200",
      active: "active:bg-slate-300 active:border-slate-300",
      disabled: "",
    },
    sage: {
      base: "text-sage-900 bg-sage-100 border-sage-100",
      hover: "hover:bg-sage-200 hover:border-sage-200",
      active: "active:bg-sage-300 active:border-sage-300",
      disabled: "",
    },
    olive: {
      base: "text-olive-900 bg-olive-100 border-olive-100",
      hover: "hover:bg-olive-200 hover:border-olive-200",
      active: "active:bg-olive-300 active:border-olive-300",
      disabled: "",
    },
    sand: {
      base: "text-sand-900 bg-sand-100 border-sand-100",
      hover: "hover:bg-sand-200 hover:border-sand-200",
      active: "active:bg-sand-300 active:border-sand-300",
      disabled: "",
    },
    maroon: {
      base: "text-maroon-900 bg-maroon-100 border-maroon-100",
      hover: "hover:bg-maroon-200 hover:border-maroon-200",
      active: "active:bg-maroon-300 active:border-maroon-300",
      disabled: "",
    },
    orange: {
      base: "text-orange-900 bg-orange-100 border-orange-100",
      hover: "hover:bg-orange-200 hover:border-orange-200",
      active: "active:bg-orange-300 active:border-orange-300",
      disabled: "",
    },
    amber: {
      base: "text-amber-900 bg-amber-100 border-amber-100",
      hover: "hover:bg-amber-200 hover:border-amber-200",
      active: "active:bg-amber-300 active:border-amber-300",
      disabled: "",
    },
    yellow: {
      base: "text-yellow-900 bg-yellow-100 border-yellow-100",
      hover: "hover:bg-yellow-200 hover:border-yellow-200",
      active: "active:bg-yellow-300 active:border-yellow-300",
      disabled: "",
    },
    lime: {
      base: "text-lime-900 bg-lime-100 border-lime-100",
      hover: "hover:bg-lime-200 hover:border-lime-200",
      active: "active:bg-lime-300 active:border-lime-300",
      disabled: "",
    },
    green: {
      base: "text-green-900 bg-green-100 border-green-100",
      hover: "hover:bg-green-200 hover:border-green-200",
      active: "active:bg-green-300 active:border-green-300",
      disabled: "",
    },
    emerald: {
      base: "text-emerald-900 bg-emerald-100 border-emerald-100",
      hover: "hover:bg-emerald-200 hover:border-emerald-200",
      active: "active:bg-emerald-300 active:border-emerald-300",
      disabled: "",
    },
    teal: {
      base: "text-teal-900 bg-teal-100 border-teal-100",
      hover: "hover:bg-teal-200 hover:border-teal-200",
      active: "active:bg-teal-300 active:border-teal-300",
      disabled: "",
    },
    cyan: {
      base: "text-cyan-900 bg-cyan-100 border-cyan-100",
      hover: "hover:bg-cyan-200 hover:border-cyan-200",
      active: "active:bg-cyan-300 active:border-cyan-300",
      disabled: "",
    },
    sky: {
      base: "text-sky-900 bg-sky-100 border-sky-100",
      hover: "hover:bg-sky-200 hover:border-sky-200",
      active: "active:bg-sky-300 active:border-sky-300",
      disabled: "",
    },
    blue: {
      base: "text-blue-900 bg-blue-100 border-blue-100",
      hover: "hover:bg-blue-200 hover:border-blue-200",
      active: "active:bg-blue-300 active:border-blue-300",
      disabled: "",
    },
    indigo: {
      base: "text-indigo-900 bg-indigo-100 border-indigo-100",
      hover: "hover:bg-indigo-200 hover:border-indigo-200",
      active: "active:bg-indigo-300 active:border-indigo-300",
      disabled: "",
    },
    violet: {
      base: "text-violet-900 bg-violet-100 border-violet-100",
      hover: "hover:bg-violet-200 hover:border-violet-200",
      active: "active:bg-violet-300 active:border-violet-300",
      disabled: "",
    },
    purple: {
      base: "text-purple-900 bg-purple-100 border-purple-100",
      hover: "hover:bg-purple-200 hover:border-purple-200",
      active: "active:bg-purple-300 active:border-purple-300",
      disabled: "",
    },
    fuchsia: {
      base: "text-fuchsia-900 bg-fuchsia-100 border-fuchsia-100",
      hover: "hover:bg-fuchsia-200 hover:border-fuchsia-200",
      active: "active:bg-fuchsia-300 active:border-fuchsia-300",
      disabled: "",
    },
    pink: {
      base: "text-pink-900 bg-pink-100 border-pink-100",
      hover: "hover:bg-pink-200 hover:border-pink-200",
      active: "active:bg-pink-300 active:border-pink-300",
      disabled: "",
    },
    rose: {
      base: "text-rose-900 bg-rose-100 border-rose-100",
      hover: "hover:bg-rose-200 hover:border-rose-200",
      active: "active:bg-rose-300 active:border-rose-300",
      disabled: "",
    },
    red: {
      base: "text-red-900 bg-red-100 border-red-100",
      hover: "hover:bg-red-200 hover:border-red-200",
      active: "active:bg-red-300 active:border-red-300",
      disabled: "",
    },
  },
  outlined: {
    gray: {
      base: "text-gray-900 bg-transparent border-gray-600",
      hover: "hover:bg-gray-600/20",
      active: "active:bg-gray-600/30",
      disabled: "",
    },
    mauve: {
      base: "text-mauve-900 bg-transparent border-mauve-600",
      hover: "hover:bg-mauve-600/20",
      active: "active:bg-mauve-600/30",
      disabled: "",
    },
    slate: {
      base: "text-slate-900 bg-transparent border-slate-600",
      hover: "hover:bg-slate-600/20",
      active: "active:bg-slate-600/30",
      disabled: "",
    },
    sage: {
      base: "text-sage-900 bg-transparent border-sage-600",
      hover: "hover:bg-sage-600/20",
      active: "active:bg-sage-600/30",
      disabled: "",
    },
    olive: {
      base: "text-olive-900 bg-transparent border-olive-600",
      hover: "hover:bg-olive-600/20",
      active: "active:bg-olive-600/30",
      disabled: "",
    },
    sand: {
      base: "text-sand-900 bg-transparent border-sand-600",
      hover: "hover:bg-sand-600/20",
      active: "active:bg-sand-600/30",
      disabled: "",
    },
    maroon: {
      base: "text-maroon-900 bg-transparent border-maroon-600",
      hover: "hover:bg-maroon-600/20",
      active: "active:bg-maroon-600/30",
      disabled: "",
    },
    orange: {
      base: "text-orange-900 bg-transparent border-orange-600",
      hover: "hover:bg-orange-600/20",
      active: "active:bg-orange-600/30",
      disabled: "",
    },
    amber: {
      base: "text-amber-900 bg-transparent border-amber-600",
      hover: "hover:bg-amber-600/20",
      active: "active:bg-amber-600/30",
      disabled: "",
    },
    yellow: {
      base: "text-yellow-900 bg-transparent border-yellow-600",
      hover: "hover:bg-yellow-600/20",
      active: "active:bg-yellow-600/30",
      disabled: "",
    },
    lime: {
      base: "text-lime-900 bg-transparent border-lime-600",
      hover: "hover:bg-lime-600/20",
      active: "active:bg-lime-600/30",
      disabled: "",
    },
    green: {
      base: "text-green-900 bg-transparent border-green-600",
      hover: "hover:bg-green-600/20",
      active: "active:bg-green-600/30",
      disabled: "",
    },
    emerald: {
      base: "text-emerald-900 bg-transparent border-emerald-600",
      hover: "hover:bg-emerald-600/20",
      active: "active:bg-emerald-600/30",
      disabled: "",
    },
    teal: {
      base: "text-teal-900 bg-transparent border-teal-600",
      hover: "hover:bg-teal-600/20",
      active: "active:bg-teal-600/30",
      disabled: "",
    },
    cyan: {
      base: "text-cyan-900 bg-transparent border-cyan-600",
      hover: "hover:bg-cyan-600/20",
      active: "active:bg-cyan-600/30",
      disabled: "",
    },
    sky: {
      base: "text-sky-900 bg-transparent border-sky-600",
      hover: "hover:bg-sky-600/20",
      active: "active:bg-sky-600/30",
      disabled: "",
    },
    blue: {
      base: "text-blue-900 bg-transparent border-blue-600",
      hover: "hover:bg-blue-600/20",
      active: "active:bg-blue-600/30",
      disabled: "",
    },
    indigo: {
      base: "text-indigo-900 bg-transparent border-indigo-600",
      hover: "hover:bg-indigo-600/20",
      active: "active:bg-indigo-600/30",
      disabled: "",
    },
    violet: {
      base: "text-violet-900 bg-transparent border-violet-600",
      hover: "hover:bg-violet-600/20",
      active: "active:bg-violet-600/30",
      disabled: "",
    },
    purple: {
      base: "text-purple-900 bg-transparent border-purple-600",
      hover: "hover:bg-purple-600/20",
      active: "active:bg-purple-600/30",
      disabled: "",
    },
    fuchsia: {
      base: "text-fuchsia-900 bg-transparent border-fuchsia-600",
      hover: "hover:bg-fuchsia-600/20",
      active: "active:bg-fuchsia-600/30",
      disabled: "",
    },
    pink: {
      base: "text-pink-900 bg-transparent border-pink-600",
      hover: "hover:bg-pink-600/20",
      active: "active:bg-pink-600/30",
      disabled: "",
    },
    rose: {
      base: "text-rose-900 bg-transparent border-rose-600",
      hover: "hover:bg-rose-600/20",
      active: "active:bg-rose-600/30",
      disabled: "",
    },
    red: {
      base: "text-red-900 bg-transparent border-red-600",
      hover: "hover:bg-red-600/20",
      active: "active:bg-red-600/30",
      disabled: "",
    },
  },
  ghost: {
    gray: {
      base: "text-gray-900 bg-transparent border-transparent",
      hover: "hover:bg-gray-600/20",
      active: "active:bg-gray-600/30",
      disabled: "",
    },
    mauve: {
      base: "text-mauve-900 bg-transparent border-transparent",
      hover: "hover:bg-mauve-600/20",
      active: "active:bg-mauve-600/30",
      disabled: "",
    },
    slate: {
      base: "text-slate-900 bg-transparent border-transparent",
      hover: "hover:bg-slate-600/20",
      active: "active:bg-slate-600/30",
      disabled: "",
    },
    sage: {
      base: "text-sage-900 bg-transparent border-transparent",
      hover: "hover:bg-sage-600/20",
      active: "active:bg-sage-600/30",
      disabled: "",
    },
    olive: {
      base: "text-olive-900 bg-transparent border-transparent",
      hover: "hover:bg-olive-600/20",
      active: "active:bg-olive-600/30",
      disabled: "",
    },
    sand: {
      base: "text-sand-900 bg-transparent border-transparent",
      hover: "hover:bg-sand-600/20",
      active: "active:bg-sand-600/30",
      disabled: "",
    },
    maroon: {
      base: "text-maroon-900 bg-transparent border-transparent",
      hover: "hover:bg-maroon-600/20",
      active: "active:bg-maroon-600/30",
      disabled: "",
    },
    orange: {
      base: "text-orange-900 bg-transparent border-transparent",
      hover: "hover:bg-orange-600/20",
      active: "active:bg-orange-600/30",
      disabled: "",
    },
    amber: {
      base: "text-amber-900 bg-transparent border-transparent",
      hover: "hover:bg-amber-600/20",
      active: "active:bg-amber-600/30",
      disabled: "",
    },
    yellow: {
      base: "text-yellow-900 bg-transparent border-transparent",
      hover: "hover:bg-yellow-600/20",
      active: "active:bg-yellow-600/30",
      disabled: "",
    },
    lime: {
      base: "text-lime-900 bg-transparent border-transparent",
      hover: "hover:bg-lime-600/20",
      active: "active:bg-lime-600/30",
      disabled: "",
    },
    green: {
      base: "text-green-900 bg-transparent border-transparent",
      hover: "hover:bg-green-600/20",
      active: "active:bg-green-600/30",
      disabled: "",
    },
    emerald: {
      base: "text-emerald-900 bg-transparent border-transparent",
      hover: "hover:bg-emerald-600/20",
      active: "active:bg-emerald-600/30",
      disabled: "",
    },
    teal: {
      base: "text-teal-900 bg-transparent border-transparent",
      hover: "hover:bg-teal-600/20",
      active: "active:bg-teal-600/30",
      disabled: "",
    },
    cyan: {
      base: "text-cyan-900 bg-transparent border-transparent",
      hover: "hover:bg-cyan-600/20",
      active: "active:bg-cyan-600/30",
      disabled: "",
    },
    sky: {
      base: "text-sky-900 bg-transparent border-transparent",
      hover: "hover:bg-sky-600/20",
      active: "active:bg-sky-600/30",
      disabled: "",
    },
    blue: {
      base: "text-blue-900 bg-transparent border-transparent",
      hover: "hover:bg-blue-600/20",
      active: "active:bg-blue-600/30",
      disabled: "",
    },
    indigo: {
      base: "text-indigo-900 bg-transparent border-transparent",
      hover: "hover:bg-indigo-600/20",
      active: "active:bg-indigo-600/30",
      disabled: "",
    },
    violet: {
      base: "text-violet-900 bg-transparent border-transparent",
      hover: "hover:bg-violet-600/20",
      active: "active:bg-violet-600/30",
      disabled: "",
    },
    purple: {
      base: "text-purple-900 bg-transparent border-transparent",
      hover: "hover:bg-purple-600/20",
      active: "active:bg-purple-600/30",
      disabled: "",
    },
    fuchsia: {
      base: "text-fuchsia-900 bg-transparent border-transparent",
      hover: "hover:bg-fuchsia-600/20",
      active: "active:bg-fuchsia-600/30",
      disabled: "",
    },
    pink: {
      base: "text-pink-900 bg-transparent border-transparent",
      hover: "hover:bg-pink-600/20",
      active: "active:bg-pink-600/30",
      disabled: "",
    },
    rose: {
      base: "text-rose-900 bg-transparent border-transparent",
      hover: "hover:bg-rose-600/20",
      active: "active:bg-rose-600/30",
      disabled: "",
    },
    red: {
      base: "text-red-900 bg-transparent border-transparent",
      hover: "hover:bg-red-600/20",
      active: "active:bg-red-600/30",
      disabled: "",
    },
  },
};

export function getGlobalVariantClasses(variant: GlobalVariant, color: Color) {
  return globalVariants[variant][color];
}

/** Color variants object used in `cva` of several components. */
export const COLOR_VARIANTS: Record<Color, ""> = {
  gray: "",
  mauve: "",
  slate: "",
  sage: "",
  olive: "",
  sand: "",
  maroon: "",
  orange: "",
  amber: "",
  yellow: "",
  lime: "",
  green: "",
  emerald: "",
  teal: "",
  cyan: "",
  sky: "",
  blue: "",
  indigo: "",
  violet: "",
  purple: "",
  fuchsia: "",
  pink: "",
  rose: "",
  red: "",
};
