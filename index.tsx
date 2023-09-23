/*
 * Project: MUIv5 Numpad
 * Description: This file contains the definition of the Numpad component.
 *
 * Created by: Kunal Singla (tekunalogy.com)
 * Created on: Sept. 22, 2023
 *
 * This code is licensed under the MIT License. See LICENSE for details.
 */
import { useState } from "react";
import { Box, Button } from "@mui/material";

type ButtonVariant = "contained" | "outlined";

function toggleButtonVariant(variant: ButtonVariant): ButtonVariant {
  return variant === "contained" ? "outlined" : "contained";
}

interface NumpadProps {
  onChange: (arg: string) => void;
  onKeyPress: (arg: string) => void;
  btnWidth: string;
  btnHeight: string;
  btnFontSize: string;
  btnGap?: number;
  btnVariant?: ButtonVariant;
}

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Numpad = (props: NumpadProps) => {
  const {
    onChange,
    onKeyPress,
    btnWidth,
    btnHeight,
    btnFontSize,
    btnGap = 2,
    btnVariant = "contained",
  } = props;

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (_value: string) => {
    const newValue: string = parseInt(
      inputValue.toString().concat(_value)
    ).toString();
    setInputValue(newValue);
    onChange(newValue);
  };

  const onButtonPress = (_value: string) => {
    if (!!onChange) handleOnChange(_value);
    if (!!onKeyPress) onKeyPress(_value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange("");
  };

  const handleDelete = () => {
    const newString = inputValue.substring(0, inputValue.length - 1);
    setInputValue(newString);
    onChange(newString);
  };

  const numpadButton = (
    value: string,
    onClick: () => void,
    isDisabled: boolean,
    variant: ButtonVariant
  ) => (
    <Button
      onClick={onClick}
      color='primary'
      variant={variant}
      sx={{ fontSize: btnFontSize, width: btnWidth, height: btnHeight }} // Adjust size as needed
      disabled={isDisabled}
    >
      {value}
    </Button>
  );

  const buttonRow = (values: number[]) => (
    <Box
      sx={{
        ...boxStyle,
        flexDirection: "row",
        gap: btnGap,
      }}
    >
      {values.map(value => (
        <Box key={value}>
          {numpadButton(
            value.toString(),
            () => onButtonPress(value.toString()),
            false,
            btnVariant
          )}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        ...boxStyle,
        flexDirection: "column",
        gap: btnGap,
      }}
    >
      {buttonRow([1, 2, 3])}
      {buttonRow([4, 5, 6])}
      {buttonRow([7, 8, 9])}
      {/* last row of buttons: backspace, 0, and clear buttons */}
      <Box
        sx={{
          ...boxStyle,
          flexDirection: "row",
          gap: btnGap,
        }}
      >
        <Box key={"backspace"}>
          {numpadButton(
            "←",
            handleDelete,
            !inputValue.length,
            toggleButtonVariant(btnVariant)
          )}
        </Box>
        <Box key={"0"}>
          {numpadButton("0", () => onButtonPress("0"), false, btnVariant)}
        </Box>
        <Box key={"clear"}>
          {numpadButton(
            "CLR",
            handleClear,
            !inputValue.length,
            toggleButtonVariant(btnVariant)
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Numpad;
