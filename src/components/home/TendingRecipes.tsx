import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, FlatList, HStack, Image, VStack } from "native-base";
import { dummyData, icons } from "@app/appconstants";
import { COLORS } from "@app/appconstants/theme";
import { CustomTypography } from "@app/reusables";
import { getArrayData } from "@app/utils/libs";
import { APP_ROUTES_CONSTANTS } from "@app/routes/constants";
import { useNavigation } from "@react-navigation/native";

const { getLastItem, getFirstItem } = getArrayData(dummyData.categories);

const TrendingRecipeCard = ({
  recipe,
  containerStyle,
}: {
  recipe: Record<string, any>;
  containerStyle: Record<string, any>;
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          APP_ROUTES_CONSTANTS.RECIPE_DETAILS as never,
          { data: recipe } as never
        );
      }}
    >
      <ImageBackground
        source={recipe.image}
        resizeMode="cover"
        style={{ ...styles.trendingRecipeContainer, ...containerStyle }}
        imageStyle={{
          borderRadius: 10,
        }}
      >
        <Box
          position={"absolute"}
          top="3"
          left="3"
          px={2}
          py={1}
          rounded="lg"
          bgColor={COLORS.transparentDarkGray}
        >
          <CustomTypography text={recipe.category} color="white" />
        </Box>
        <Box
          position={"absolute"}
          bottom="3"
          left="3"
          right="3"
          height={"100px"}
          px={2}
          py={2}
          rounded="lg"
          bgColor={COLORS.transparentDarkGray}
        >
          <HStack justifyContent={"space-between"} height="full">
            <VStack flex="1" justifyContent={"space-between"}>
              <CustomTypography
                text={recipe.name}
                maxWidth={"80%"}
                color="white"
                type="h3"
              />
              <CustomTypography
                text={`${recipe.duration} | ${recipe.serving} Serving`}
                color="white"
              />
            </VStack>
            <Image
              source={recipe.isBookmark ? icons.bookmarkFilled : icons.bookmark}
              alt="recipe-img"
              resizeMode="contain"
              height="20px"
              width="20px"
              tintColor={COLORS.lime}
            />
          </HStack>
        </Box>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const TrendingRecipes = () => {
  return (
    <Box>
      <CustomTypography type="h2" text="Trending Recipe" mb={3} mx={4} />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData.categories}
        keyExtractor={(item) => `trending-${item.id}`}
        renderItem={({ item, index }) => {
          const isLastItem = getLastItem(index);
          const isFirstItem = getFirstItem(index);

          const additionalStyle = {
            marginLeft: isFirstItem ? 20 : 0,
            marginRight: isLastItem ? 20 : 15,
          };

          return (
            <TrendingRecipeCard
              recipe={item}
              containerStyle={additionalStyle}
            />
          );
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  trendingRecipeContainer: {
    height: 340,
    width: 260,
    borderRadius: 10,
    marginRight: 8,
    position: "relative",
  },
});
