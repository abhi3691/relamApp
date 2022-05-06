import React from "react";
import { View, Button, StyleSheet } from "react-native";
import QuickStart from './database/Store'
import Realm from "realm";
export default function App() {

  let realm = new Realm({ path: "myRealm" })

  let task1 = realm.objects("Task")

  console.log(`${task1[0].name}`)


  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => QuickStart()} />
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
