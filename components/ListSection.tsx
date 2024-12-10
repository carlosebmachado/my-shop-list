import { Image, StyleSheet, Platform, TouchableHighlight, ScrollView, View, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ListItem from "@/components/ListItem";

import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";

import { useTranslation } from "react-i18next";
import { PropsWithChildren } from "react";

export type ListSectionProps = PropsWithChildren<{}>;

export default function ListSection({ children }: ListSectionProps) {
  const { t /*, i18n*/ } = useTranslation();
  const { height, width } = useWindowDimensions();

  console.log(height);

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Sub level</ThemedText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 48,
    // paddingHorizontal: 28,
    // gap: 16,
    // overflow: "hidden",
  },
});
