import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Circle, Path } from "react-native-svg";
const SvgTimer = (props: SvgProps) => (
  <Svg
    fill="none"
    stroke="currentColor"
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
