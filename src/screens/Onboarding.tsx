import React from "react";

import { VStack } from "native-base";
import { COLORS, SIZES } from "@app/appconstants/theme";
import { CustomButton, CustomTypography } from "@app/reusables";
import { OnboardingBackground } from "@app/components";

const Onboarding = ({ navigation }) => {
  return (
    <OnboardingBackground>
      <VStack bottom={7} position="absolute" px={4} width={"full"} space={8}>
        <VStack maxWidth={SIZES.width * 0.6} space={4}>
          <CustomTypography
            type="h1"
            text="Cooking a Delicious Food Easily"
            color="white"
          />
          <CustomTypography
            color={COLORS.gray}
            maxWidth={SIZES.width * 0.5}
            text="Discover more than 1200 recipes in your hands and cooking it easily"
          />
        </VStack>
        <VStack space={3}>
          <CustomButton
            onPress={() => navigation.navigate("APP")}
            text="Login"
          />
          <CustomButton text="Sign Up" type="outline" />
        </VStack>
      </VStack>
    </OnboardingBackground>
  );
};

export default Onboarding;
