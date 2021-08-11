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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import NumbersInputField from "../../../components/NumberInput";
import RadioYesOrNo from "../../../components/YesorNoRadio";
import { getPowerFormUrl } from "../../../utils";

import oaklandanimalservice from "../../../assets/oaklandanimalservice.png";

// import PdfForm from "./petAdoption.pdf";

const PetAdoptionForm = () => {
  //   const [numPages, setNumPages] = useState(null);
  const {register, handleSubmit} = useForm();
  const [linkUrl, setLinkUrl] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);
  const onSubmit = (data) => {
    const powerFormUrl = getPowerFormUrl(data);
    console.log(powerFormUrl);
    setLinkUrl(powerFormUrl);
  }

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }
  return (
    <VStack align="start" maxW="1000px" m="1em">
      {/* <Document file={`${PdfForm}`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}

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
        <HStack justify="space-between">
          <VStack align="start">
            <HStack>
              {" "}
              <Text>Name</Text> <Input {...register("fullName")} />
            </HStack>
            <HStack>
              {" "}
              <Text>Address</Text> <Input {...register("address")}/>
            </HStack>
            <HStack>
              <HStack>
                {" "}
                <Text>City</Text> <Input {...register("city")} />
              </HStack>
              <HStack>
                {" "}
                <Text>Zip</Text> <Input {...register("zip")}/>
              </HStack>
            </HStack>
            <HStack>
              <HStack>
                {" "}
                <Text>Phone</Text> <Input {...register("phone-home")}/>
              </HStack>
              <HStack>
                {" "}
                <Text>(Cell)</Text> <Input {...register("phone-cell")} />
              </HStack>
            </HStack>
            <HStack>
              {" "}
              <Text>Email address</Text> <Input {...register("email")}/>
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
              <Stack spacing={10} direction="row">
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
        </HStack>

        <HStack>
          <Text>1</Text>
          <Text>
            Do you understand that your name and information will be checked in
            our system to confirm that you do not have any history of animal
            abuse, neglect, or irresponsible pet ownership?
          </Text>
          <RadioGroup>
            <HStack>
              <Radio value="Yes" {...register("d_1")}>Yes</Radio>
              <Radio value="No" {...register("d_1")}>No</Radio>
            </HStack>
          </RadioGroup>
        </HStack>

        <HStack>
          <Text>2</Text>
          <Text>
            Are you 18 years or older (required)?
            <span></span>
          </Text>
          <RadioGroup>
            <HStack>
              <Radio value="Yes" {...register("d_2")}>Yes</Radio>
              <Radio value="No" {...register("d_2")}>No</Radio>
            </HStack>
          </RadioGroup>
        </HStack>

        <HStack whiteSpace="nowrap">
          <Text>3</Text>
          <Text>Why do you want a dog?</Text>
          <Input {...register("d_3_1")}/>
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>
            <span>4.</span>Why did you select this particular dog?
          </Text>
          <Input {...register("d_4")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>5</Text>
          <Text>How many people live in the home?</Text>
          <HStack>
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
          </HStack>
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>6</Text>
          <Text>Are there children who visit the home regularly?</Text>
          <RadioGroup>
            <HStack>
              <Radio value="Yes" {...register("d_6_a")}>Yes</Radio>
              <Radio value="No" {...register("d_6_a")}>No</Radio>
            </HStack>
          </RadioGroup>
          <Text>Ages:</Text>
          <Input {...register("d_6_b")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>7</Text>
          <Text>How many other animals do you currently have?</Text>
          <HStack>
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
            <Text>If you have dogs, what breeds?</Text>
            <Input {...register("d_7_d")} />
          </HStack>
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>8</Text>
          <Text>Have you had dogs in the past?</Text>
          <RadioGroup>
            <HStack>
              <Radio value="Yes" {...register("d_8_a")}>Yes</Radio>
              <Radio value="No" {...register("d_8_a")}>No</Radio>
            </HStack>
          </RadioGroup>
          <Text>How many?</Text>
          <Input {...register("d_8_b")} />
          <Text>If yes, what happened to them?</Text>
          <Input {...register("d_8_c")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>9</Text>
          <Text>Where will the dog stay during the day? Describe:</Text>
          <Input {...register("d_9_1")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>10</Text>
          <Text>Where will the dog stay at night? Describe:</Text>
          <Input {...register("d_10_1")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>11</Text>
          <Text>On average, how long will the dog be alone each day?</Text>
          <Input {...register("d_11")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>12</Text>
          <Text>Where will the dog be kept when it is alone?</Text>
          <Input {...register("d_12")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>13</Text>
          <Text>Do you have a yard?</Text>
          <RadioGroup>
            <HStack>
              <Radio value="Yes" {...register("d_13_a")}>Yes</Radio>
              <Radio value="No" {...register("d_13_a")}>No</Radio>
            </HStack>
          </RadioGroup>
          <Text>How high is the fence around yard?</Text>
          <Input {...register("d_13_b")} />
          <Text>Locked?</Text>
          <Checkbox {...register("d_13_c")} value="Yes">Yes</Checkbox>
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>14</Text>
          <Text>How will you exercise your dog?</Text>
          <Input {...register("d_14")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>15</Text>
          <Text>Do you understand that your new dog may show unexpected and unwanted behaviors, such as destructive chewing, loud/excessive barking, dog aggression, separation anxiety and even signs of human aggression, when he/she becomes comfortable in your home?</Text>
          <RadioGroup>
            <HStack>
              <Radio value="Yes" {...register("d_15")}>Yes</Radio>
              <Radio value="No" {...register("d_15")}>No</Radio>
            </HStack>
          </RadioGroup>
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>16</Text>
          <Text>How will you handle behavior problems when they appear?</Text>
          <Input {...register("d_16_1")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>17</Text>
          <Text>If you will use a dog trainer or attend dog training classes, list their information here:</Text>
          <Input {...register("d_17")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>18</Text>
          <Text>This dog may not be housebroken. How will you housetrain the dog?</Text>
          <Input {...register("d_18")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>19</Text>
          <Text>What is the name of the veterinarian to whom you will take your dog?</Text>
          <Input {...register("d_19")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>20</Text>
          <Text>What would you do with the dog if something happened and you could no longer keep the dog?</Text>
          <Input {...register("d_20")} />
        </HStack>

        <HStack w="100%" whiteSpace="nowrap">
          <Text>21</Text>
          <Text>How did you hear about Oakland Animal Services?</Text>
          <Input {...register("d_21")} />
        </HStack>

        <input type="submit" value="Submit" />
      </form>
      {linkUrl ? (
        <a href={linkUrl}>Go to Form</a>
      ) : null}
    </VStack>
  );
};

export default PetAdoptionForm;
