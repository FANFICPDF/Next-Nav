import React, { useEffect, useRef, useState } from 'react';
import { FileNode } from './TreeContainer';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';
import { Background } from 'reactflow';
// import { useVsCodeApi } from '../VsCodeApiContext';

type Props = {
  props: FileNode;
};

const Node = ({ props }: Props): JSX.Element => {
  // const [directory, setDirectory] = useState('nothing here');
  // const vscode = useVsCodeApi();
  // const srcDirRef = useRef('src');
  // const appDirRef = useRef('app');
  // const [srcDir, setSrcDir] = useState('');
  // const [appDir, setAppDir] = useState('');
  // Update the refs whenever srcDir or appDir changes
  // useEffect(() => {
  //   srcDirRef.current = srcDir;
  //   appDirRef.current = appDir;
  // }, [srcDir, appDir]);

  // //add listener for messages from backend
  // useEffect(() => {
  //   window.addEventListener('message', handleReceivedMessage);
  //   return () => {
  //     window.removeEventListener('message', handleReceivedMessage);
  //   };
  // }, []);

  // //all of the different messages
  // const handleReceivedMessage = (event: MessageEvent) => {
  //   const message = event.data;
  //   switch (message.command) {
  //     //get directory
  //     // case 'sendString':
  //     //   const formattedDirectory = JSON.stringify(
  //     //     JSON.parse(message.data),
  //     //     null,
  //     //     2
  //     //   );
  //     //   setDirectory(formattedDirectory);
  //     //   break;
  //     //file was just added we need to get directory again
  //     case 'added_addFile':
  //       console.log('file added');
  //       handleRequestDirectory();
  //       break;
  //     //file was just deleted we need to get directory again
  //     case 'added_deleteFile':
  //       console.log('file deleted');
  //       handleRequestDirectory();
  //       break;
  //   }
  // };

  // //get directory
  // const handleRequestDirectory = () => {
  //   console.log('srcDir: ', srcDirRef.current, ' appDir: ', appDirRef.current);
  //   vscode.postMessage({
  //     command: 'getRequest',
  //     src: srcDirRef.current || 'src',
  //     app: appDirRef.current || 'app',
  //   });
  // };

  // //add a file need path and filename.extension
  // const handleAddFile = () => {
  //   console.log(path);
  //   vscode.postMessage({
  //     command: 'addFile',
  //     path: path,
  //     fileName: 'page2.tsx',
  //   });
  // };

  // //delete a file need path and filename.extension
  // const handleDeleteFile = () => {
  //   vscode.postMessage({
  //     command: 'deleteFile',
  //     path: path,
  //     fileName: 'page2.tsx',
  //   });
  // };

  // //open a tab
  // const handleOpenTab: (
  //   path: string,
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => void = (path, event) => {
  //   // event.preventDefault();
  //   console.log('Opening path:', path);
  //   console.log('Event:', event);
  //   vscode.postMessage({
  //     command: 'open_file',
  //     filePath: path,
  //   });
  // };

  //deconstruct props here. Used let to account for undefined checking.
  let { contents, parentNode, folderName, path }: FileNode = props;

  //ensures obj.contents is never undefined
  // if (!contents) {
  //   contents = [];
  // }
  // if (!path) {
  //   path = '';
  // }

  //generate the amount of file icons based on the number of contents
  const files: JSX.Element[] = [];
  for (let i = 0; i < contents.length; i++) {
    files.push(
      <Button
      // onClick={(event) => {
      //   handleOpenTab(path.concat('/', contents[i]), event);
      // }}
      >
        <div
          style={{
            borderRadius: '3px',
            border: '1px solid white',
            rotate: '45deg',
            width: '20px',
            height: '20px',
            backgroundColor: 'black',
          }}
        ></div>
      </Button>
    );
  }

  return (
    <div
      style={{
        border: 'none',
      }}
    >
      <Card
        bgColor="#050505"
        align="center"
        minW="15rem"
        minH="12rem"
        padding="10px 20px"
        borderRadius="15px"
        boxShadow={`0px 0px 7px 1px ${
          parentNode === null ? '#24FF00' : '#FFF616'
        }`}
      >
        <CardHeader>
          <Heading size="lg" color="#FFFFFF">
            {folderName}
          </Heading>
        </CardHeader>
        <CardBody padding="0">
          <div
            style={{
              display: 'flex',
              gap: '15px',
            }}
          >
            {files}
          </div>
        </CardBody>
        <CardFooter>
          {/*Add on click for this button to open modal */}
          <Button bgColor="#303030" textColor="white" padding="0">
            +
          </Button>
          {/* <Button
            onClick={handleAddFile}
            bgColor="#303030"
            textColor="white"
            padding="0"
          >
            add file
          </Button>
          <Button
            onClick={handleDeleteFile}
            bgColor="#303030"
            textColor="white"
            padding="0"
          >
            delete file page2.tsx
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Node;
