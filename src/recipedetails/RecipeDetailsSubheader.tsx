import React from "react";
import { Box, HStack, Image, View, VStack } from "native-base";
import { CustomTypography } from "@app/reusables";
import { COLORS } from "@app/appconstants/theme";

export const RecipeDetailsSubHeader = ({ item }) => {
  return (
    <HStack justifyContent="space-between">
      <VStack maxWidth={"45%"} space={1}>
        <CustomTypography text={item.name} type="h2" lineHeight="27px" />
        <CustomTypography
          text={`${item.duration} | ${item.serving} Serving`}
          type="body5"
          color={COLORS.transparentBlack5}
        />
      </VStack>
      <VStack>
        <HStack>
          {item.viewers.slice(0, 3).map((viewer) => (
            <Image
              key={viewer.id}
              width={"40px"}
              height={"40px"}
              rounded="full"
              ml="-10px"
              source={viewer.profilePic}
              alt="authors"
              borderWidth={1}
              borderColor="white"
            />
          ))}
          {!!item.viewers.slice(3).length && (
            <Box
              width="40px"
              height="40px"
              rounded="full"
              ml="-10px"
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={COLORS.darkGreen}
              borderWidth={1}
              borderColor="white"
            >
              <CustomTypography
                text={`${item.viewers.slice(2).length}+`}
                color="white"
              />
            </Box>
          )}
        </HStack>
        <CustomTypography
          text={`${item.viewers.length} people`}
          type="body5"
          textAlign={"right"}
          mb={"-5px"}
          color={COLORS.transparentBlack5}
        />
        <CustomTypography
          textAlign={"right"}
          text={"Already try this!"}
          type="body5"
          color={COLORS.transparentBlack5}
        />
      </VStack>
    </HStack>
  );
};
