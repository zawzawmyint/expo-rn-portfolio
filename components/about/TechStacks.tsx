import React from "react";
import { StyleSheet, View } from "react-native";
import db from "../../_data/db.json";
import TechStackCard from "./TechStackCard";
import TechTitle from "./TechTitle";
const TechStacks = () => {
  return (
    <View style={styles.techStacksContainer}>
      <View style={styles.techStacksSkillContainer}>
        <TechTitle title="Languages" />
        {db.skills.languages.map((techStack) => (
          <TechStackCard
            key={techStack.text}
            text={techStack.text}
            level={techStack.level}
            image={techStack.image}
          />
        ))}
      </View>
      <View style={styles.techStacksSkillContainer}>
        <TechTitle title="Developments" />
        {db.skills.developments.map((techStack) => (
          <TechStackCard
            key={techStack.text}
            text={techStack.text}
            level={techStack.level}
            image={techStack.image}
          />
        ))}
      </View>
      <View style={styles.techStacksSkillContainer}>
        <TechTitle title="Other" />
        {db.skills.others.map((techStack) => (
          <TechStackCard
            key={techStack.text}
            text={techStack.text}
            level={techStack.level}
            image={techStack.image}
          />
        ))}
      </View>
    </View>
  );
};

export default TechStacks;

const styles = StyleSheet.create({
  techStacksContainer: {
    flex: 1,
    gap: 20,
  },
  techStacksSkillContainer: {
    gap: 15,
  },
});
