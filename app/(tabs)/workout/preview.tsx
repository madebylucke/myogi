import { fontSize, height, width } from "@/constants/ResponsiveSizes";
import { StyleSheet, Text, View } from "react-native";

export default function PreviewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(6),
    paddingTop: height(2),
  },
  title: {
    fontSize: fontSize(32),
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
