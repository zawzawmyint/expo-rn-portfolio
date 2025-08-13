import { getImage } from "@/utils/getImage";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  project: {
    name: string;
    description: string;
    stacks: string[];
    image: string;
    demo: string;
    github: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTop}>
        <Text style={styles.projectCardTitle}>{project.name}</Text>

        <View style={styles.buttonContainer}>
          <Link href={project.github as any} target="_blank" asChild>
            <Ionicons name="logo-github" size={24} color="black" />
          </Link>
          <Link href={project.demo as any} target="_blank" asChild>
            <Ionicons name="globe" size={24} color="black" />
          </Link>
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.projectCardImageContainer}>
          <Image
            source={getImage(project.image)}
            onError={(error) => console.log("Image error:", error)}
            style={styles.projectCardImage}
          />
        </View>
        <View style={styles.projectCardDescriptionContainer}>
          <Text style={styles.projectCardDescription}>
            {project.description}
          </Text>
        </View>
      </View>
      <View style={styles.cardBottom}>
        {project.stacks.map((item) => (
          <Text style={styles.projectCardStack} key={item}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  cardContainer: {
    gap: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  projectCardImageContainer: {
    width: "100%",
    minHeight: 250,
    height: 250,
  },
  projectCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  projectCardDescriptionContainer: {
    width: "100%",
  },
  projectCardDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  projectCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  projectCardStack: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 4,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 10,
    backgroundColor: "white",
    color: "purple",
  },
});
