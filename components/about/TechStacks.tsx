import React from "react";
import { SectionList, View } from "react-native";
import db from "../../_data/db.json";
import TechStackCard from "./TechStackCard";
import TechTitle from "./TechTitle";
const TechStacks = () => {
  return (
    <SectionList
      scrollEnabled={false}
      sections={[
        {
          title: "Languages",
          data: db.skills.languages,
        },
        {
          title: "Developments",
          data: db.skills.developments,
        },
        {
          title: "Others",
          data: db.skills.others,
        },
      ]}
      keyExtractor={(item, index) => item.text + index}
      renderItem={({ item }) => (
        <TechStackCard
          key={item.text}
          text={item.text}
          level={item.level}
          image={item.image}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <TechTitle title={title} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default TechStacks;
