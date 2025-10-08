import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Circle, Path } from "react-native-svg";

interface TimerIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

const SvgTimer = ({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}: TimerIconProps) => (
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
    <Path d="M10 2h4M12 14l3-3" />
    <Circle cx={12} cy={14} r={8} />
  </Svg>
);
export default SvgTimer;
