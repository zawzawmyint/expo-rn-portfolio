import { getImage } from "@/utils/getImage";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TechStackCard = ({
  text,
  level,
  image,
}: {
  text: string;
  level: string;
  image: string;
}) => {
  return (
    <View style={styles.techStackCardContainer}>
      <View style={styles.techStackCardImageContainer}>
        <Image
          source={getImage(image)}
          onError={(error) => console.log("Image error:", error)}
          style={styles.techStackCardImage}
        />
      </View>
      <View style={styles.techStackCardTextContainer}>
        <Text style={styles.techStackCardText}>{text}</Text>
        <Text style={styles.techStackCardTextDescription}>{level}</Text>
      </View>
    </View>
  );
};

export default TechStackCard;

const styles = StyleSheet.create({
  techStackCardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    borderRadius: 15,
    padding: 8,
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
  techStackCardImageContainer: {
    width: 50,
    height: 50,
  },
  techStackCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  techStackCardTextContainer: {
    flex: 1,
    gap: 2,
  },
  techStackCardText: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.7,
  },
  techStackCardTextDescription: {
    fontSize: 14,
  },
});
