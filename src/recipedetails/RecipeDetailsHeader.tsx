import { Animated, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Box, HStack, Image, VStack } from "native-base";
import { CustomTypography } from "@app/reusables";
import { COLORS } from "@app/appconstants/theme";
import { icons } from "@app/appconstants";
import { useNavigation } from "@react-navigation/native";

export const RecipeDetailsHeader = ({ item, scrollY }) => {
  const navigation = useNavigation();

  const HEADER_HEIGHT = 400;

  return (
    <Animated.View
      style={{
        position: "relative",
      }}
    >
      <Animated.Image
        source={item.image}
        resizeMode="cover"
        style={{
          width: "200%",
          height: HEADER_HEIGHT,
          overflow: "hidden",
          transform: [
            {
              translateX: -90,
            },
            {
              translateY: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
              }),
            },
            {
              scale: scrollY.interpolate({
                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                outputRange: [2, 1, 0.75],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          position: "absolute",
          top: 60,
          left: 30,
          right: 30,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 120, 350],
                outputRange: [0, -200, -300],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <HStack
          //   position={"absolute"}
          //   top={"12"}
          //   left={"4"}
          //   right={"4"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              padding: 6,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 30,
              backgroundColor: COLORS.transparentBlack5,
            }}
          >
            <Image
              width={"15px"}
              height={"15px"}
              resizeMode="contain"
              rounded="full"
              tintColor={"white"}
              source={icons.back}
              alt="authors"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 6,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 5,
              backgroundColor: COLORS.transparentBlack5,
            }}
          >
            <Image
              width={"20px"}
              height={"20px"}
              resizeMode="contain"
              tintColor={COLORS.lime}
              source={icons.bookmark}
              alt="authors"
            />
          </TouchableOpacity>
        </HStack>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 20,
          left: 30,
          right: 30,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 170, 250],
                outputRange: [0, 0, 100],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <HStack
          rounded={"lg"}
          bgColor={COLORS.transparentDarkGray}
          p={3}
          pl={5}
          shadow={3}
          space={4}
          alignItems={"center"}
        >
          <Image
            width={"40px"}
            height={"40px"}
            rounded="full"
            ml="-10px"
            source={item.author.profilePic}
            alt="authors"
          />
          <VStack flex="1">
            <CustomTypography text="Recipe by" color={COLORS.lightGray2} />
            <CustomTypography
              text={item.author?.name}
              color={COLORS.white}
              type="h3"
            />
          </VStack>
          <TouchableOpacity>
            <Box
              px={2}
              py={2}
              rounded="lg"
              borderWidth={1}
              borderColor={COLORS.lime}
            >
              <Image
                width={"25px"}
                height={"20px"}
                resizeMode="contain"
                source={icons.rightArrow}
                alt="authors"
                tintColor={COLORS.lime}
              />
            </Box>
          </TouchableOpacity>
        </HStack>
      </Animated.View>

      {/* </Animated.Image> */}
    </Animated.View>
  );
};
