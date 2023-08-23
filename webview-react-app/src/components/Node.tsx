import React from 'react';
import { FileNode } from './TreeContainer';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
  IconButton,
  Spacer,
  Flex,
  VStack,
  StackDivider,
} from '@chakra-ui/react';
import {
  PiFileCodeFill,
  PiFolderNotchOpenFill,
  PiTrashFill,
  PiFolderNotchPlusFill,
} from 'react-icons/pi';
type Props = {
  obj: FileNode;
};

const Node = ({ obj }: Props): JSX.Element => {
  if (!obj.contents) {
    obj.contents = [];
  }
  const files = obj.contents.map((el) => {
    return (
      <Box>
        <Flex gap="2">
          {' '}
          <Button
            size="sm"
            variant="outline"
            leftIcon={<Icon as={PiFileCodeFill} />}
          >
            {' '}
            {el}
          </Button>
          <Spacer />
          <IconButton
            isRound={true}
            variant="solid"
            size="xs"
            colorScheme="red"
            aria-label="Done"
            icon={<Icon as={PiTrashFill} />}
          />
        </Flex>
      </Box>
    );
  });
  return (
    <div style={{ border: 'none' }}>
      <Card align="center" padding="1px 30px">
        {/* <CardHeader>
          <Heading size="md">
            <Icon as={PiFolderNotchOpenFill} /> {obj.folderName}
          </Heading>
        </CardHeader> */}
        <CardBody>
          {files.length >= 1 ? (
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Heading size="md">
                        <Icon as={PiFolderNotchOpenFill} /> {obj.folderName}
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={2}
                    align="stretch"
                  >
                    {files}
                  </VStack>
                  {/* <ul style={{ listStyleType: 'none' }}>{files}</ul> */}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ) : (
            <Box as="span" flex="1" textAlign="left">
              <Heading size="md">
                <Icon as={PiFolderNotchOpenFill} /> {obj.folderName}
              </Heading>
            </Box>
          )}
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue" size="xs">
            <Icon as={PiFolderNotchPlusFill} />
            add folder
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Node;
