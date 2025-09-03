import Blogs from "@/components/blogs/Blogs";
import Buttons from "@/components/buttons/Buttons";
import MainSection from "@/components/MainSection";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";

export default function BlogScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <MainSection
          title="My Journey in Tech and Beyond"
          description="Welcome to my blog! I'm a passionate tech enthusiast who loves to share my knowledge and experiences with the world. In this space, I'll be sharing my journey in tech and my thoughts on the future of technology."
        >
          <Buttons
            text="LinkedIn"
            variant="default"
            link="https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"
          />
          <Buttons
            variant="primary"
            text="Resume"
            link="https://zawzawmyint.vercel.app/resume/Zaw_Zaw_Myint_Resume.pdf"
          />
        </MainSection>
        <Blogs refreshing={refreshing} setRefreshing={setRefreshing} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: "column",
    gap: 30,
  },
});
