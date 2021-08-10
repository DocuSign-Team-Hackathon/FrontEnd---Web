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
// import { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import NumbersInputField from "../../../components/NumberInput";
import RadioYesOrNo from "../../../components/YesorNoRadio";
import { getPowerFormUrl } from "../../../utils";

import oaklandanimalservice from "../../../assets/oaklandanimalservice.png";

// import PdfForm from "./petAdoption.pdf";

const PetAdoptionForm = () => {
  //   const [numPages, setNumPages] = useState(null);
  const {register, handleSubmit} = useForm();
  //   const [pageNumber, setPageNumber] = useState(1);
  const onSubmit = (data) => {
    const powerFormUrl = getPowerFormUrl(data);
    console.log(powerFormUrl);
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
              <Text>Name</Text> <Input {...register("name")} />
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
        <input type="submit" value="submit" />
      </form>
    </VStack>
  );
};

export default PetAdoptionForm;
