import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const HomeBanner = () => {
  return (
    <View>
      <Image
        style={{
          height: responsiveHeight(15),
          marginTop: 15,
          alignSelf: "center",
          borderRadius: 15,
          height:180,
          width: 360,
        }}
        source={require("../assets/banner.jpeg")}
      />
    </View>
  );
};

export default HomeBanner;
