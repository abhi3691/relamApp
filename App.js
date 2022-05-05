import React from "react";
import { View, Button, StyleSheet } from "react-native";
import QuickStart from "./database/Store";
export default function App() {



  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => console.log('pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
