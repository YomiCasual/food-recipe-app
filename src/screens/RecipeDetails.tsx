import { Animated, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { Box, HStack, Image, StatusBar, VStack } from "native-base";
import { CustomTypography } from "@app/reusables";
import { COLORS } from "@app/appconstants/theme";
import {
  RecipeDetailsHeader,
  RecipeDetailsSubHeader,
} from "@app/recipedetails";
import { icons } from "@app/appconstants";
import { useNavigation } from "@react-navigation/native";

const RecipeDetails = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;

  const ingredients = data.ingredients;

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Box flex="1">
      <StatusBar barStyle="light-content" />
      <VStack space={4} mb={3}>
        <Animated.FlatList
          style={{
            //   marginHorizontal: 20,
            backgroundColor: "white",
          }}
          data={[...ingredients, ...ingredients, ...ingredients]}
          keyExtractor={(item, index) => `Ingredient-${item.id}-${index}`}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          ListHeaderComponent={
            <VStack bgColor={"white"}>
              <RecipeDetailsHeader item={data} scrollY={scrollY} />
              <VStack pb={3} px={4} bgColor="white" mt={5} space={2}>
                <RecipeDetailsSubHeader item={data} />
                <HStack alignItems={"center"} mb={4}>
                  <CustomTypography text="Ingredients" flex={1} type="h4" />
                  <CustomTypography
                    text={`${ingredients.length} items`}
                    type="body5"
                    color={COLORS.transparentBlack3}
                  />
                </HStack>
              </VStack>
            </VStack>
          }
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                }}
              >
                <HStack space={4} mb={2} alignItems="center">
                  <Box p={2} bgColor={COLORS.transparentBlack1} rounded="lg">
                    <Image
                      source={item.icon}
                      width={"20px"}
                      height={"20px"}
                      alt="ingredient-icon"
                    />
                  </Box>
                  <CustomTypography text={item.description} flex={1} />
                  <CustomTypography text={item.quantity} />
                </HStack>
              </TouchableOpacity>
            );
          }}
        />
      </VStack>
    </Box>
  );
};

export default RecipeDetails;
