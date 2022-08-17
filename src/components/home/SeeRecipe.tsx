import React from "react";
import { Box, HStack, Image, Input, VStack } from "native-base";
import { CustomTypography } from "@app/reusables";
import { COLORS, FONTS } from "@app/appconstants/theme";
import { icons, images } from "@app/appconstants";
import { TouchableOpacity } from "react-native";

export const SeeRecipe = () => {
  return (
    <HStack
      mx={4}
      bgColor={COLORS.lightGreen}
      px={4}
      py={3}
      space={3}
      rounded="lg"
    >
      <Image
        alt="search-icon"
        width="70px"
        height="70px"
        resizeMode="contain"
        source={images.recipe}
      />
      <VStack justifyContent={"space-between"}>
        <CustomTypography
          text="You have 12 recipes you haven't tried yet "
          maxWidth={"80%"}
          lineHeight={18}
        />
        <TouchableOpacity>
          <CustomTypography
            type="body4"
            underline
            color={COLORS.darkGreen}
            text="See Recipes"
          />
        </TouchableOpacity>
      </VStack>
    </HStack>
  );
};
