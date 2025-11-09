// components/ui/Header/Header.tsx
import { Colors, Spacing, Typography } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
}

export function Header({ title, leftAction, rightAction }: HeaderProps) {
  const hasLeftAction = !!leftAction;

  return (
    <View style={styles.container}>
      {hasLeftAction ? (
        <>
          <View style={styles.leftSide}>{leftAction}</View>

          <View style={styles.centerContent}>
            {title && (
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            )}
          </View>

          <View style={styles.rightSide}>{rightAction}</View>
        </>
      ) : (
        <>
          <View style={styles.leftContent}>
            {title && (
              <Text style={[styles.title, styles.titleLeft]} numberOfLines={1}>
                {title}
              </Text>
            )}
          </View>

          {rightAction && <View style={styles.rightOnly}>{rightAction}</View>}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    position: "relative",
    width: "100%",
  },
  // For centered layout with left action
  leftSide: {
    alignItems: "flex-start", // Align left action to the left
    justifyContent: "center",
  },
  rightSide: {
    alignItems: "flex-end", // Align right action to the right
    justifyContent: "center",
  },
  centerContent: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },

  leftContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightOnly: {
    marginLeft: Spacing.sm,
  },
  title: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: "600",
    color: Colors.light.secondaryText,
  },
  titleLeft: {
    textAlign: "left",
  },
});
