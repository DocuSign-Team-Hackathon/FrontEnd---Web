import {
  Box,
  Flex,
  HStack,
  Stack,
  Input,
  Text,
  VStack,
  Image,
  Radio,
  RadioGroup,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import NumbersInputField from "../../../components/NumberInput";
// import RadioYesOrNo from "../../../components/YesorNoRadio";
import { getPowerFormUrl } from "../../../utils";

import oaklandanimalservice from "../../../assets/oaklandanimalservice.png";
import Header from "../../LandingPage/Header";

// import PdfForm from "./petAdoption.pdf";

const PetAdoptionForm = () => {
  //   const [numPages, setNumPages] = useState(null);
  const { register, handleSubmit } = useForm();
  const [linkUrl, setLinkUrl] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);
  const onSubmit = (data) => {
    const powerFormUrl = getPowerFormUrl(data);
    console.log(powerFormUrl);
    setLinkUrl(powerFormUrl);
  };

  return (
    <Box w="100%">
      <VStack
        align="start"
        maxW="1200px"
        p="30px"
        // border="1px solid black"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        m="30px auto"
        bgColor="white"
        borderRadius="10px"
      >
        <Header />
        <HStack justify="space-between" w="100%">
          <Box w="400px">
            <Image src={oaklandanimalservice} alt="oakland animal services" />
          </Box>

          <Box w="300px">
            <Text fontSize="3xl">
              {" "}
              <Text as="u" fontWeight="bold">
                DOG
              </Text>{" "}
              ADOPTION Questionnaire
            </Text>
          </Box>
        </HStack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            justifyContent={{ lg: "space-between" }}
            direction={{ sm: "column", lg: "row" }}
          >
            <VStack
              align="start"
              whiteSpace={{ sm: "nowrap", lg: "normal" }}
              m={{ sm: "15px 0px", lg: "0px" }}
            >
              <HStack>
                {" "}
                <Text>Name</Text>{" "}
                <Input
                  {...register("fullName")}
                  w={{ sm: "100%", lg: "auto" }}
                />
              </HStack>
              <HStack>
                {" "}
                <Text>Address</Text> <Input {...register("address")} />
              </HStack>
              <Stack direction={{ sm: "column", lg: "row" }}>
                <HStack>
                  {" "}
                  <Text>City</Text> <Input {...register("city")} />
                </HStack>
                <HStack>
                  {" "}
                  <Text>Zip</Text> <Input {...register("zip")} />
                </HStack>
              </Stack>
              <Stack direction={{ sm: "column", lg: "row" }}>
                <HStack>
                  {" "}
                  <Text>Phone</Text> <Input {...register("phone-home")} />
                </HStack>
                <HStack>
                  {" "}
                  <Text>(Cell)</Text> <Input {...register("phone-cell")} />
                </HStack>
              </Stack>
              <HStack>
                {" "}
                <Text>Email address</Text> <Input {...register("email")} />
              </HStack>
            </VStack>

            <VStack
              border="1px solid black"
              borderRadius="5px"
              p="10px"
              fontSize="1xl"
              align="start"
            >
              <Flex justifyContent="center" w="100%">
                <Text as="u" fontWeight="bold" textAlign="center">
                  OAS STAFF/VOLUNTEER USE ONLY{" "}
                </Text>
              </Flex>
              <HStack>
                {" "}
                <Text fontSize="15px">ID VERIFIED (Inc. age)</Text> <Input />
              </HStack>
              <HStack>
                {" "}
                <Text fontSize="15px" whiteSpace="nowrap">
                  PROOF SHOWN
                </Text>{" "}
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  m={{ sm: "10px 0px", lg: "30px 0px" }}
                  spacing={10}
                >
                  <Checkbox colorScheme="blue">OWN</Checkbox>
                  <Checkbox colorScheme="green">RENT</Checkbox>
                </Stack>
              </HStack>
              <HStack>
                {" "}
                <Text fontSize="15px" whiteSpace="nowrap">
                  DATABASE CHECKED
                </Text>{" "}
                <Input />
              </HStack>
              <HStack>
                {" "}
                <Text fontSize="15px" whiteSpace="nowrap">
                  TIME SPENT WITH DOG
                </Text>{" "}
                <Input />
              </HStack>
              <HStack>
                {" "}
                <Text fontSize="15px" whiteSpace="nowrap">
                  EVERYONE HERE{" "}
                </Text>{" "}
                <Input />
              </HStack>
            </VStack>
          </Flex>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
          >
            <Text>
              1. Do you understand that your name and information will be
              checked in our system to confirm that you do not have any history
              of animal abuse, neglect, or irresponsible pet ownership?
            </Text>
            <RadioGroup>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                m={{ sm: "10px 0px", lg: "30px 0px" }}
              >
                <Radio value="Yes" {...register("d_1")}>
                  Yes
                </Radio>
                <Radio value="No" {...register("d_1")}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
          >
            <Text>
              2. Are you 18 years or older (required)?
              <span></span>
            </Text>
            <RadioGroup>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                m={{ sm: "10px 0px", lg: "30px 0px" }}
              >
                <Radio value="Yes" {...register("d_2")}>
                  Yes
                </Radio>
                <Radio value="No" {...register("d_2")}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>3. Why do you want a dog?</Text>
            <Input {...register("d_3_1")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>4. Why did you select this particular dog?</Text>
            <Input {...register("d_4")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>5. How many people live in the home?</Text>
            <Stack
              direction={{ sm: "column", lg: "row" }}
              m={{ sm: "10px 0px", lg: "30px 0px" }}
            >
              <NumberInput>
                <NumberInputField {...register("d_5")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>Adults</Text>
              <NumberInput>
                <NumberInputField {...register("d_5_a")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>Children</Text>
              <NumberInput>
                <NumberInputField {...register("d_5_b")} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>Ages</Text>
              <Input {...register("d_5_c")} />
            </Stack>
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>6. Are there children who visit the home regularly?</Text>
            <RadioGroup>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                m={{ sm: "10px 0px", lg: "30px 0px" }}
              >
                <Radio value="Yes" {...register("d_6_a")}>
                  Yes
                </Radio>
                <Radio value="No" {...register("d_6_a")}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
            <Text>Ages:</Text>
            <Input {...register("d_6_b")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>7</Text>

            <Stack
              direction={{ sm: "column", lg: "column" }}
              m={{ sm: "10px 0px", lg: "30px 0px" }}
            >
              <Stack direction="row">
                <Text>How many other animals do you currently have?</Text>
                <Text>Dogs</Text>
                <NumberInput>
                  <NumberInputField {...register("d_7_a")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Text>Cats</Text>
                <NumberInput>
                  <NumberInputField {...register("d_7_b")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Text>Other</Text>
                <NumberInput>
                  <NumberInputField {...register("d_7_c")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
              <Stack direction="row">
                <Text>If you have dogs, what breeds?</Text>
                <Input {...register("d_7_d")} />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>8. Have you had dogs in the past?</Text>
            <RadioGroup>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                m={{ sm: "10px 0px", lg: "30px 0px" }}
              >
                <Radio value="Yes" {...register("d_8_a")}>
                  Yes
                </Radio>
                <Radio value="No" {...register("d_8_a")}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
            <Text>How many?</Text>
            <Input {...register("d_8_b")} />
            <Text>If yes, what happened to them?</Text>
            <Input {...register("d_8_c")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>9. Where will the dog stay during the day? Describe:</Text>
            <Input {...register("d_9_1")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>10. Where will the dog stay at night? Describe:</Text>
            <Input {...register("d_10_1")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              11. On average, how long will the dog be alone each day?
            </Text>
            <Input {...register("d_11")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>12. Where will the dog be kept when it is alone?</Text>
            <Input {...register("d_12")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            justifyContent="space-between"
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <HStack>
              <Text>13. Do you have a yard?</Text>
              <RadioGroup>
                <Stack
                  direction={{ sm: "row", lg: "row" }}
                  m={{ sm: "10px 0px", lg: "30px 0px" }}
                >
                  <Radio value="Yes" {...register("d_13_a")}>
                    Yes
                  </Radio>
                  <Radio value="No" {...register("d_13_a")}>
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </HStack>
            <HStack>
              <Text>How high is the fence around yard?</Text>
              <Input {...register("d_13_b")} />
            </HStack>
            <HStack>
              <Text>Locked?</Text>
              <Checkbox {...register("d_13_c")} value="Yes">
                Yes
              </Checkbox>
            </HStack>
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>14. How will you exercise your dog?</Text>
            <Input {...register("d_14")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              15. Do you understand that your new dog may show unexpected and
              unwanted behaviors, such as destructive chewing, loud/excessive
              barking, dog aggression, separation anxiety and even signs of
              human aggression, when he/she becomes comfortable in your home?
            </Text>
            <RadioGroup>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                m={{ sm: "10px 0px", lg: "30px 0px" }}
              >
                <Radio value="Yes" {...register("d_15")}>
                  Yes
                </Radio>
                <Radio value="No" {...register("d_15")}>
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              16. How will you handle behavior problems when they appear?
            </Text>
            <Input {...register("d_16_1")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              17. If you will use a dog trainer or attend dog training classes,
              list their information here:
            </Text>
            <Input {...register("d_17")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              18. This dog may not be housebroken. How will you housetrain the
              dog?
            </Text>
            <Input {...register("d_18")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              19. What is the name of the veterinarian to whom you will take
              your dog?
            </Text>
            <Input {...register("d_19")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>
              20. What would you do with the dog if something happened and you
              could no longer keep the dog?
            </Text>
            <Input {...register("d_20")} />
          </Stack>

          <Stack
            direction={{ sm: "column", lg: "row" }}
            m={{ sm: "10px 0px", lg: "30px 0px" }}
            w="100%"
            whiteSpace={{ sm: "normal", xl: "no-wrap" }}
          >
            <Text>21. How did you hear about Oakland Animal Services?</Text>
            <Input {...register("d_21")} />
          </Stack>

          <Flex justifyContent="center">
            {" "}
            <Button type="submit"> Submit</Button>
          </Flex>
        </form>
        {linkUrl ? <a href={linkUrl}>Go to Form</a> : null}
      </VStack>
    </Box>
  );
};

export default PetAdoptionForm;
