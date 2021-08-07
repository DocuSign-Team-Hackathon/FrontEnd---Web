import { HStack, Radio, RadioGroup } from "@chakra-ui/react";

const RadioYesOrNo = () => {
  return (
    <RadioGroup>
      <HStack>
        <Radio value="1">Yes</Radio>
        <Radio value="2">No</Radio>
      </HStack>
    </RadioGroup>
  );
};

export default RadioYesOrNo;
