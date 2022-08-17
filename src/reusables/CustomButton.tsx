import { TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTypography, CustomTypographyProps } from "./CustomTypography";
import { COLORS } from "@app/appconstants/theme";

type CustomButtonProps = {
  type?: "filled" | "outline";
  text: string;
  onPress?: () => void;
} & { textProps?: CustomTypographyProps };

export const CustomButton = ({
  type = "filled",
  textProps,
  onPress,
  text,
}: CustomButtonProps) => {
  const isOutline = type === "outline";

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={
          isOutline
            ? [COLORS.black, COLORS.black]
            : [COLORS.darkGreen, COLORS.lime]
        }
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[0.6, 0.8]}
        style={{
          paddingVertical: 14,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          width: "100%",
          borderWidth: isOutline ? 1.6 : 0,
          borderColor: COLORS.darkGreen,
        }}
      >
        <CustomTypography color="white" type="h3" text={text} />
      </LinearGradient>
    </TouchableOpacity>
  );
};
