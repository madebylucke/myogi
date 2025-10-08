import SvgCalendar from "@/components/icons/SvgCalendar";
import SvgChevronRight from "@/components/icons/SvgChevronRight";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout</Text>
        <Pressable>
          <SvgCalendar width={32} height={32}></SvgCalendar>
        </Pressable>
      </View>
      <View style={styles.emptyWorkoutWrapper}>
        <Pressable style={styles.emptyWorkoutButton}>
          <Text style={styles.emptyWorkoutText}>Empty Workout</Text>
        </Pressable>
      </View>
      <View style={styles.plannedWorkoutsContainer}>
        <Text style={styles.plannedWorkoutsContainerTitle}>Today</Text>
        <View style={styles.plannedWorkoutsWrapper}>
          <Pressable
            style={[
              styles.plannedWorkout,
              { borderBottomRightRadius: 2, borderBottomLeftRadius: 2 },
            ]}
          >
            <View style={styles.plannedWorkoutInfo}>
              <Text style={styles.plannedWorkoutTitle}>Pull Day</Text>
              <Text style={styles.plannedWorkoutPlan}>Hypertrophy Plan</Text>
            </View>
            <View style={styles.plannedWorkoutAction}>
              <SvgChevronRight />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.plannedWorkout,
              { borderTopRightRadius: 2, borderTopLeftRadius: 2 },
            ]}
          >
            <View style={styles.plannedWorkoutInfo}>
              <Text style={styles.plannedWorkoutTitle}>Push Day</Text>
              <Text style={styles.plannedWorkoutPlan}>Strength Plan</Text>
            </View>
            <View style={styles.plannedWorkoutAction}>
              <SvgChevronRight />
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.templatesContainer}>
        <Text style={styles.templatesContainerTitle}>Templates</Text>
        <View style={styles.templatesWrapper}>
          <Pressable
            style={[
              styles.template,
              { borderTopRightRadius: 8, borderTopLeftRadius: 8 },
            ]}
          >
            <View style={styles.templateInfo}>
              <Text style={styles.templateTitle}>Back Workout</Text>
            </View>
            <View style={styles.templateAction}>
              <SvgChevronRight />
            </View>
          </Pressable>
          <Pressable style={styles.template}>
            <View style={styles.templateInfo}>
              <Text style={styles.templateTitle}>Chest Workout</Text>
            </View>
            <View style={styles.templateAction}>
              <SvgChevronRight />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.template,
              { borderBottomRightRadius: 8, borderBottomLeftRadius: 8 },
            ]}
          >
            <View style={styles.templateInfo}>
              <Text style={styles.templateTitle}>Leg Workout</Text>
            </View>
            <View style={styles.templateAction}>
              <SvgChevronRight />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000000",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  emptyWorkoutWrapper: {
    paddingHorizontal: 12,
  },
  emptyWorkoutButton: {
    backgroundColor: "#e6e9ecff",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
  },
  emptyWorkoutText: {
    fontSize: 20,
  },

  plannedWorkoutsContainer: {
    paddingHorizontal: 12,
    marginTop: 18,
  },
  plannedWorkoutsContainerTitle: {
    fontSize: 24,
    color: "#bababaff",
    marginBottom: 12,
  },
  plannedWorkoutsWrapper: {
    paddingHorizontal: 4,
    gap: 4,
  },
  plannedWorkout: {
    backgroundColor: "#e6e9ecff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingRight: 12,
    alignItems: "center",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 12,
  },
  plannedWorkoutInfo: {},
  plannedWorkoutTitle: {
    fontSize: 24,
  },
  plannedWorkoutPlan: {
    color: "#898989ff",
  },
  plannedWorkoutAction: {
    paddingTop: 4,
  },

  templatesContainer: {
    paddingHorizontal: 12,
    marginTop: 18,
  },
  templatesContainerTitle: {
    fontSize: 24,
    color: "#bababaff",
    marginBottom: 12,
  },
  templatesWrapper: {
    paddingHorizontal: 4,
    gap: 4,
  },
  template: {
    backgroundColor: "#e6e9ecff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingRight: 12,
    alignItems: "center",
    borderRadius: 2,
    paddingVertical: 16,
  },
  templateInfo: {},
  templateTitle: {
    fontSize: 18,
    color: "#1d1d1dff",
  },
  templateAction: {},
});
