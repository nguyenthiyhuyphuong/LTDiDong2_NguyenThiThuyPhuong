import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Home2 = () => {
  return (
    <View>
      <Image
        style={{
          height: responsiveHeight(15),
          marginTop: 15,
          alignSelf: "center",
          borderRadius: 15,
          height:70,
          width: 350,
        }}
        source={require("../assets/1.jpeg")}
      />
    </View>
  );
};

export default Home2;
