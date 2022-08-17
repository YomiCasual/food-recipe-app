import { FONTS } from "@app/appconstants/theme";
import { Text } from "native-base";
import React from "react";

export type CustomTypographyProps = {
  text: string;
  type?: keyof typeof FONTS;
} & { [key: string]: any };

export const CustomTypography = ({
  text,
  type = "body4",
  ...rest
}: CustomTypographyProps) => {
  return (
    <Text {...FONTS[type]} {...rest}>
      {text}
    </Text>
  );
};
