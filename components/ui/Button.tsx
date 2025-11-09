import { Colors, Sizes, Spacing } from "@/constants";
import { ActivityIndicator, Pressable, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "disabled";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = true,
}: ButtonProps) {
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: Colors.light.primary,
        textColor: Colors.light.primaryText,
      },
      secondary: {
        backgroundColor: Colors.light.secondary,
        textColor: Colors.light.secondaryText,
      },
      disabled: {
        backgroundColor: Colors.light.disabled,
        textColor: Colors.light.disabledText,
      },
      outline: {
        backgroundColor: "none",
        textColor: Colors.light.primaryText,
      },
    };
    return variants[variant];
  };

  const curVariant = getVariantStyles();
  return (
    <Pressable
      style={({ pressed }) => [
        {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: curVariant.backgroundColor,
          height: Sizes.buttonHeight[size],
          paddingHorizontal: size === "sm" ? Spacing.md : Spacing.lg,
          borderRadius: Sizes.borderRadius.md,
          borderWidth: variant === "outline" ? 1 : 0,
          width: fullWidth ? "100%" : "auto",
          opacity: pressed ? 0.7 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}
      onPress={onPress}
      disabled={variant === "disabled" || loading}
      android_ripple={{ color: "rgba(255, 255, 255, 0.3)" }}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            color: curVariant.textColor,
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
