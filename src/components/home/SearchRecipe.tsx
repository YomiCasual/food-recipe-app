import React from "react";
import { Box, HStack, Image, Input, VStack } from "native-base";
import { CustomTypography } from "@app/reusables";
import { COLORS, FONTS } from "@app/appconstants/theme";
import { icons } from "@app/appconstants";

export const SearchRecipe = () => {
  return (
    <HStack
      alignItems={"center"}
      mx={4}
      bgColor={COLORS.lightGray}
      px={4}
      py={2}
      rounded="lg"
    >
      <Image
        alt="search-icon"
        width="16px"
        height="16px"
        resizeMode="contain"
        source={icons.search}
        tintColor={COLORS.transparentBlack7}
      />
      <Input
        placeholder="Search Recipe"
        placeholderTextColor={COLORS.transparentBlack5}
        variant="unstyled"
        fontSize={14}
      />
    </HStack>
  );
};
