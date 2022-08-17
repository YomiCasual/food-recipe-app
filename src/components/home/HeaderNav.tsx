import React from "react";
import { Box, HStack, VStack } from "native-base";
import { CustomTypography } from "@app/reusables";
import { COLORS } from "@app/appconstants/theme";

export const HeaderNav = () => {
  return (
    <HStack alignItems={"center"} mx={4} pt={2}>
      <VStack flex="1">
        <CustomTypography
          text="Hello Onisade,"
          type="h3"
          color={COLORS.darkLime}
        />
        <CustomTypography
          type="body4"
          text="What do you want to cook today?"
          color={COLORS.transparentBlack5}
        />
      </VStack>
      <Box
        width="40px"
        height="40px"
        bgColor={COLORS.darkGreen}
        rounded="full"
      ></Box>
    </HStack>
  );
};
