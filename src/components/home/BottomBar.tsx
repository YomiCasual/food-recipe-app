import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Image,
  Button,
  PresenceTransition,
} from "native-base";
import { Animated, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "@app/appconstants/theme";

const BottomBar = ({ state, descriptors, navigation }) => {
  return (
    <Box
      bgColor="#ffffff"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      zIndex="99"
      paddingBottom="4"
    >
      <Flex
        maxWidth={SIZES.width * 0.85}
        mx="auto"
        width="full"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={label}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{}}
            >
              <VStack
                position="relative"
                // py={3}
                pt={5}
                width={"40px"}
                alignItems="center"
                space={3}
              >
                <Image
                  source={icon}
                  alt="icon"
                  width="25px"
                  resizeMode="contain"
                  height="25px"
                  tintColor={
                    isFocused ? COLORS.darkGreen : COLORS.transparentBlack3
                  }
                />
                <Box
                  height={1}
                  borderTopRadius={5}
                  width="full"
                  bgColor={isFocused ? COLORS.darkGreen : "transparent"}
                />

                {/* <Text>{label}</Text> */}
              </VStack>
            </TouchableOpacity>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BottomBar;
