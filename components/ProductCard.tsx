import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useCart } from "@/context/CartContext";
import CustomAlert from "./CustomAlert";

export type CardProp = {
  image: any;
  name: string;
  price: number;
  id: number;
};

const colors = [
  "#CBD6FF",
  "#E0E0E0",
  "#FCEEE1",
  "#FFE663",
  "#66B4FBs",
  "#ff6600",
];

const ProductCard = ({ image, name, price, id }: CardProp) => {
  const { dispatch } = useCart();
  const [alertVisible, setAlertVisible] = useState(false);
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { id, price, image, name } });
    setAlertVisible(true);
  };
  return (
    <View style={styles.wrapper}>
      <CustomAlert
        visible={alertVisible}
        message={`Added ${name} to cart`}
        onClose={() => setAlertVisible(false)}
      />
      <View style={[styles.imgWrapper, { backgroundColor: bgColor }]}>
        <Image style={styles.image} source={image} />
        <Pressable style={styles.add} onPress={() => addToCart()}>
          <AntDesign name="plus" size={18} color="#333333" />
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 12,
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{` ₦ ${price.toLocaleString()}`}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    width: "47%",
    marginBottom: 20,
    paddingRight: 20,
  },
  imgWrapper: {
    width: "100%",
    borderRadius: 35,
    padding: 30,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  add: {
    backgroundColor: "#fff",
    width: 35,
    height: 35,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -8,
    right: -10,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333333",
  },
  price: {
    fontSize: 17,
    fontWeight: "900",
    color: "#808080",
  },
});
