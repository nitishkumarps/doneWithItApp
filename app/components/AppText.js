import React from "react";
import { StyleSheet, Text, View } from "react-native";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
