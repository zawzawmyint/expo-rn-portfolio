import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import db from "../../_data/db.json";
import TechTitle from "./TechTitle";
import WorkExpCard from "./WorkExpCard";
const Experiences = () => {
  return (
    <View style={styles.experiencesContainer}>
      <View style={styles.experiencesSkillContainer}>
        <TechTitle title="Experiences" />
        <FlatList
          data={db.workexperiences}
          renderItem={({ item }) => <WorkExpCard workexperience={item} />}
          keyExtractor={(item) => item.company}
          contentContainerStyle={{ gap: 15 }}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default Experiences;

const styles = StyleSheet.create({
  experiencesContainer: {
    gap: 10,
  },
  experiencesSkillContainer: {
    gap: 5,
  },
});
