import { useTheme, Text, Container, Spacer } from '@nextui-org/react';
import { Canvas } from '../components/Canvas';

export default function Home() {
  const { theme } = useTheme();

  return (
    <Container>
      <Text h1
        
      >
        Cell Canvas
      </Text>
      <Spacer />
      <Canvas />
    </Container>
  );
}
