import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { CardProp } from "./ProductCard";
import { AntDesign } from "@expo/vector-icons";
import { CartItem, useCart } from "@/context/CartContext";

const CartCard = ({ name, id, image, price, quantity }: CartItem) => {
  const { dispatch } = useCart();
  const remove = () => dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View style={{ gap: 10 }}>
        <Text style={styles.name}>
          {name} {` x ${quantity}`}
        </Text>
        <Text style={styles.price}>{` ₦ ${price.toLocaleString()}`}</Text>
      </View>
      <Pressable onPress={remove}>
        <AntDesign name="delete" size={16} color="red" />
      </Pressable>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 12,
  },
  img: {
    height: "100%",
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
