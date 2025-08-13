import React from "react";
import { StyleSheet, View } from "react-native";
import db from "../../_data/db.json";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <View style={styles.projectListContainer}>
      {db.projects.map((item) => (
        <ProjectCard key={item.name} project={item} />
      ))}
    </View>
  );
};

export default ProjectList;

const styles = StyleSheet.create({
  projectListContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
