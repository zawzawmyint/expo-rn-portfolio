import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { DataMedium } from "@/endpoints/blogEndpoints";
import { Link } from "expo-router";

const BlogCard = ({ item }: { item: DataMedium }) => {
  const { title, description, link, image } = item;

  return (
    <View style={styles.container}>
      <Link href={link as any}>
        <Text style={styles.title}>{title}</Text>
      </Link>
      <Text style={styles.description}>{description} ...</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "column",
    gap: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
});
