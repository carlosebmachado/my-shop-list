import { Image, StyleSheet, Platform, TouchableHighlight, ScrollView, View, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ListItem from "@/components/ListItem";
import ListSection from "@/components/ListSection";

import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";

import { useTranslation } from "react-i18next";

export default function ListScreen() {
  const { t /*, i18n*/ } = useTranslation();
  const { height, width } = useWindowDimensions();

  // console.log(height);

  function changeLanguage(lang: string) {
    // i18n.changeLanguage(lang);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{"List name"}</ThemedText>
      </ThemedView>
      <ScrollView>
        <View style={{ padding: 18, backgroundColor: Colors.dark.lightBackground, minHeight: height }}>
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <ListSection key={i}>
                  {Array(Math.floor(Math.random() * 6 + 1))
                    .fill(0)
                    .map((_, i) => {
                      return <ListItem key={i} title={"List " + i} content={"Loren ipsum dolor sit amet"} />;
                    })}
                </ListSection>
              );
            })}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 48,
    paddingTop: 48,
    // paddingHorizontal: 28,
    // gap: 16,
    // overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 12,
    paddingHorizontal: Sizes.container.paddingHorizontal,
  },
  scrollView: {
    backgroundColor: Colors.dark.lightBackground,
    // paddingHorizontal: Sizes.container.paddingHorizontal,
    gap: 16,
    overflow: "hidden",
  },
});
