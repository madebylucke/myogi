import { Button } from "@/components/ui/Button";
import { Header } from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";
import { fontSize, width } from "@/constants/ResponsiveSizes";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function PreviewScreen() {
  return (
    <View style={styles.container}>
      <Header
        leftAction={
          <IconButton
            iconName="arrow-back"
            size={24}
            color="#000"
            onPress={() => router.back()}
          />
        }
        rightAction={
          <IconButton
            iconName="ellipsis-vertical"
            size={24}
            color="#000"
            onPress={() => router.back()}
          />
        }
      />
      <View style={{
        paddingHorizontal: width(6),
        flex: 1,
      }}>
        <Text style={styles.title}>Workout</Text>
        <View style={styles.separator} />
      </View>
      
      <View style={{
        paddingHorizontal: width(4),
        marginBottom: 18
      }}>
      <Button title="Start Workout" onPress={()=>{}} size="lg" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12
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
