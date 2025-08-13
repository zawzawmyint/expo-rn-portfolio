import React from "react";
import { StyleSheet, View } from "react-native";
import db from "../../_data/db.json";
import TechTitle from "./TechTitle";
import WorkExpCard from "./WorkExpCard";
const Experiences = () => {
  return (
    <View style={styles.experiencesContainer}>
      <View style={styles.experiencesSkillContainer}>
        <TechTitle title="Experiences" />
        {db.workexperiences.map((workexperience) => (
          <WorkExpCard
            key={workexperience.company}
            workexperience={workexperience}
          />
        ))}
      </View>
    </View>
  );
};

export default Experiences;

const styles = StyleSheet.create({
  experiencesContainer: {
    gap: 20,
  },
  experiencesSkillContainer: {
    gap: 15,
  },
});
