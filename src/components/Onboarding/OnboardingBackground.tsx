import { ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Box, StatusBar } from "native-base";
import { images } from "@app/appconstants";
import { COLORS } from "@app/appconstants/theme";

const OnboardingBackground = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <Box flex={1}>
      <StatusBar barStyle="light-content" translucent />
      <ImageBackground
        source={images.loginBackground}
        style={{
          height: "100%",
          width: "100%",
        }}
        resizeMode="cover"
      ></ImageBackground>
      <LinearGradient
        colors={["transparent", COLORS.black]}
        locations={[0.4, 0.65]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      {children}
    </Box>
  );
};

export default OnboardingBackground;
