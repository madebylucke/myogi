import { StyleSheet, Text, TextComponent, View } from "react-native";
import { size, width, height, fontSize } from "@/constants/ResponsiveSizes"; 

export default function AnalyzeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.splitAreas}>
        <View style={styles.splitArea}>
          <View style={styles.metric}>
            <Text style={styles.metricAmount}>190</Text>
            <Text style={styles.metricUnit}>kg</Text>
          </View>
          <View style={styles.metricInfo}>
            <Text style={styles.metricTitle}>Body weight</Text>
            <Text style={styles.metricDescription}>21 min ago</Text>
          </View>
        </View>
        <View style={styles.splitArea}>
          <View style={styles.metric}>
            <Text style={styles.metricAmount}>190</Text>
            <Text style={styles.metricUnit}>kg</Text>
          </View>
          <View style={styles.metricInfo}>
            <Text style={styles.metricTitle}>Body weight</Text>
            <Text style={styles.metricDescription}>21 min ago</Text>
          </View>
        </View>
      </View>
      <View style={styles.fullArea}>
          <Text style={styles.fullAreaTitle}>Exercises</Text>
          <Text style={styles.fullAreaDescription}>Last entry: 95 min ago</Text>
      </View>

      <View style={styles.fullArea}>
          <Text style={styles.fullAreaTitle}>Workouts</Text>
          <Text style={styles.fullAreaDescription}>Last entry: 1d ago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    paddingHorizontal: width(6),
  },
  splitAreas:{
    flexDirection: "row",
    gap: 10
  },
  splitArea:{
    backgroundColor: "#e6e9ecff",
    justifyContent: "flex-end",
    height: 140,
    flex: 1,
    borderRadius: 12,
    paddingVertical: size(12),
    paddingHorizontal: size(14)
  },
  metric: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    marginBottom: 0,
    marginLeft: -6
  },
  metricInfo: {
    paddingLeft: 4,
  },
  metricTitle: {
    fontWeight: 600,
    fontSize: fontSize(12),
  },
  metricDescription: {
    color: "gray"
  },
  metricUnit: {
    fontSize: fontSize(14),
    fontWeight: 600,
    color: "gray",
    marginBottom: 4
  },
  metricAmount:{
    fontSize: fontSize(32),
    fontWeight: 600,
  },
  fullArea: {
    marginTop: 8,
    width: "100%",
    backgroundColor: "#e6e9ecff",
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
    borderRadius: 10
  },
  fullAreaTitle: {
    fontWeight: 600,
    fontSize: 20
  },
  fullAreaDescription: {
    color: "gray"
  }
});
