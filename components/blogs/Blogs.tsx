import { fetchBlogs, RootInterface } from "@/endpoints/blogEndpoints";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BlogCard from "./BlogCard";

const Blogs = ({
  refreshing,
  setRefreshing,
}: {
  refreshing: boolean;
  setRefreshing: (refreshing: boolean) => void;
}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<RootInterface | null>(null);

  const getBlogs = async () => {
    if (refreshing) {
      setData(null);
      setLoading(true);
    }

    try {
      const data = await fetchBlogs();
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [refreshing]);

  if (isLoading) {
    return (
      <View>
        <Text style={styles.text}>LOading...</Text>
      </View>
    );
  }
  if (!data) {
    return (
      <View>
        <Text style={styles.text}>Error loading data</Text>
      </View>
    );
  }
  if (!data.dataMedium) {
    return (
      <View>
        <Text style={styles.text}>Error loading data</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.dataMedium}
        renderItem={({ item }) => <BlogCard item={item} />}
        keyExtractor={(item) => item.link}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
