import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path, Rect } from "react-native-svg";

interface CalendarIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgCalendar = ({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}: CalendarIconProps) => (
  <Svg
    fill="none"
    stroke={color}
    width={width}
    height={height}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    strokeWidth={2}
    {...props}
  >
    <Path d="M8 2v4M16 2v4" />
    <Rect width={18} height={18} x={3} y={4} rx={2} />
    <Path d="M3 10h18" />
  </Svg>
);
export default SvgCalendar;
