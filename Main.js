import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  Button,
  Box,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  useColorMode,
  useToken,
} from 'native-base';

import {
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WideButton from './components/buttons/WideButton';
import ConstrainedButton from './components/buttons/ConstrainedButton';

type SectionProps = PropsWithChildren<{
  title: string,
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <Box variant="section">
      <Text variant="themedShort">{title}</Text>
      <Text variant="paragraph">{children}</Text>
    </Box>
  );
}

const Main = ({handleTheme, themeType}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  const [primary, secondary] = useToken('colors', ['primary', 'secondary']);

  const backgroundStyle = {
    backgroundColor: colorMode !== 'light' ? primary[800] : primary[50],
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <VStack h="1/1">
        <StatusBar
          barStyle={colorMode !== 'light' ? 'light-content' : 'dark-content'}
          backgroundColor={primary[50]}
        />
        <Center>
          <Heading variant="themed">Native Base Test</Heading>
          <HStack direction="column">
            <Text variant="themed">Theme: {themeType}</Text>
            <Text variant="themed">ColorMode: {colorMode}</Text>
          </HStack>
        </Center>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <VStack>
            <Section title="Step One">
              Edit <Text fontWeight="bold">App.tsx</Text> to change this screen
              and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
          </VStack>
          <ConstrainedButton onPress={toggleColorMode}>
            ColorMode Switch
          </ConstrainedButton>
          <WideButton onPress={handleTheme}>
            Local Switch (Demo Only)
          </WideButton>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

export default Main;
