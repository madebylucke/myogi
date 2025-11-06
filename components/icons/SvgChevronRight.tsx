// components/icons/SvgChevronRight.tsx
import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

interface ChevronRightIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

const SvgChevronRight = ({
  width = 24,
  height = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: ChevronRightIconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    {...props}
  >
    <Path d="m9 18 6-6-6-6" />
  </Svg>
);

export default SvgChevronRight;
