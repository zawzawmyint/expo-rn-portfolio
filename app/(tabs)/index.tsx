import Buttons from "@/components/buttons/Buttons";
import Info from "@/components/home/Info";
import Profile from "@/components/home/Profile";
import MainSection from "@/components/MainSection";
import { ScrollView, StyleSheet, useColorScheme, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MainSection
          title="Turning Ideas into Reality"
          description="I design and build user-friendly, responsive web applications, mobile applications, and more using modern technologies like React, Next.js, React Native, and more."
        >
          <Buttons text="My Projects" link="/projects" variant="primary" />
          <Buttons text="Github" link="https://github.com/zawzawmyint" />
        </MainSection>
        <Profile />
        <Info />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    gap: 40,
  },
});
