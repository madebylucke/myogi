// components/ui/IconButton.tsx
import { Sizes } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  disabled?: boolean;
}

export function IconButton({
  icon,
  onPress,
  size = 24,
  color,
  disabled = false,
}: IconButtonProps) {
  const iconColor = color;
  return (
    <Pressable
      style={({ pressed }) => [
        {
          padding: 8,
          borderRadius: Sizes.borderRadius.round,
          justifyContent: "center",
          alignItems: "center",
          opacity: pressed ? 0.5 : disabled ? 0.3 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Ionicons name={icon} size={size} color={iconColor} />
    </Pressable>
  );
}
