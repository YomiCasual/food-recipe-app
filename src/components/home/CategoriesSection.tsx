import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Box, FlatList, HStack, Image, VStack } from "native-base";
import { dummyData } from "@app/appconstants";
import { COLORS, SIZES } from "@app/appconstants/theme";
import { CustomTypography } from "@app/reusables";

const CategoriesCard = ({ recipe }: { recipe: Record<string, any> }) => {
  return (
    <TouchableOpacity>
      <Box bgColor={COLORS.gray2} px={4} py={2} mx={4} mb={4} rounded="xl">
        <HStack space={4}>
          <Image
            source={recipe.image}
            resizeMode="cover"
            borderRadius={10}
            width="80px"
            height="80px"
            alt="recipe-img"
          />
          <VStack flex="1" justifyContent={"space-between"}>
            <CustomTypography
              text={recipe.name}
              type="h3"
              maxWidth={SIZES.width * 0.4}
            />
            <CustomTypography
              type="body5"
              color={COLORS.gray}
              text={`${recipe.duration} | ${recipe.serving} Serving`}
            />
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export const CategoriesSection = ({
  listHeaderComponents,
}: {
  listHeaderComponents: JSX.Element;
}) => {
  return (
    <FlatList
      ListFooterComponent={<Box mb={20}></Box>}
      showsVerticalScrollIndicator={false}
      data={dummyData.categories}
      ListHeaderComponent={listHeaderComponents}
      keyExtractor={(item) => `Categories-${item.id}`}
      renderItem={({ item }) => {
        return <CategoriesCard recipe={item} />;
      }}
    />
  );
};
