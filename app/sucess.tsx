import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const sucess = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="checkcircleo" size={80} color="green" />
        <Text>Thanks for shopping with us.</Text>
      </View>
    </SafeAreaView>
  );
};

export default sucess;

const styles = StyleSheet.create({});
