import Experiences from "@/components/about/Experience";
import TechStacks from "@/components/about/TechStacks";
import Buttons from "@/components/buttons/Buttons";
import MainSection from "@/components/MainSection";
import { ScrollView, StyleSheet, View } from "react-native";

export default function About() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MainSection
          title="Who I am and what I use"
          description="With expertise in React.js and Next.js, I thrive on turning complex ideas into seamless digital experiences."
        >
          <Buttons
            text="LinkedIn"
            variant="primary"
            link="https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"
          />

          <Buttons
            variant="default"
            text="Resume"
            link="https://zawzawmyint.vercel.app/resume/Zaw_Zaw_Myint_Resume.pdf"
          />
        </MainSection>
        <TechStacks />
        <Experiences />
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
