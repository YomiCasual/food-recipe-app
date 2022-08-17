import { TouchableOpacity } from "react-native";
import React from "react";
import {
  CategoriesSection,
  HeaderNav,
  SearchRecipe,
  SeeRecipe,
  TrendingRecipes,
} from "@app/components/home";
import { Box, HStack, StatusBar, View, VStack } from "native-base";
import { COLORS } from "@app/appconstants/theme";
import { CustomTypography } from "@app/reusables";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <Box safeArea flex={1} bgColor="white">
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <Box bgColor="white">
        {/* Flat List */}

        {/* Categories */}
        <CategoriesSection
          listHeaderComponents={
            <VStack space={6}>
              {/* HeaderNav */}
              <HeaderNav />
              {/* Search Recipes */}
              <SearchRecipe />
              {/* SeeRecipes */}
              <SeeRecipe />
              <TrendingRecipes />
              <HStack mb={3} mx={4} alignItems="center">
                <CustomTypography type="h2" text="Categories" flex="1" />
                <TouchableOpacity>
                  <CustomTypography
                    type="body5"
                    color={COLORS.transparentBlack5}
                    text="View All"
                  />
                </TouchableOpacity>
              </HStack>
            </VStack>
          }
        />
      </Box>
    </Box>
  );
};

export default Home;
