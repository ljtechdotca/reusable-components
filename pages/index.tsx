import { Avatar } from "@components/common";
import { Button, Container, Flex, Grid } from "@components/ui";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Flex
        gap={2}
        align="center"
        justify="space-between"
        width="768px"
        wrap="wrap"
      >
        <Avatar
          gap={0.5}
          background="var(--accent-1)"
          src="/vercel.svg"
          size={32}
          name="Bobby Bill Bob"
          alt="hello"
        />
        <Avatar
          gap={1}
          background="var(--accent-1)"
          src="/vercel.svg"
          size={64}
          fontSize={2}
          name="Bobby Bill Bob"
          alt="hello"
        />
        <Avatar
          gap={2}
          background="var(--accent-1)"
          src="/vercel.svg"
          size={128}
          fontSize={4}
          name="Bobby Bill Bob"
          alt="hello"
        />
        <Avatar alt="" size={240} src="/vercel.svg" />
        <Flex>
          <Button onClick={() => console.log("👋 Hello world")}>
            Click me
          </Button>
          <Button border="red" onClick={() => console.log("Lorem Ipsum")}>
            Click me
          </Button>
          <Button
            background="dodgerblue"
            border="dodgerblue"
            color="white"
            onClick={() => console.log("Foo bar")}
          >
            Click me
          </Button>
        </Flex>
      </Flex>
      <Grid
        align="center"
        columns={2}
        gap={2}
        justify="center"
        rows={2}
        width="768px"
      >
        <Avatar
          alt="hello"
          background="var(--accent-1)"
          gap={0.5}
          name="Bobby Bill Bob"
          size={32}
          src="/vercel.svg"
        />
        <Avatar
          alt="hello"
          background="var(--accent-1)"
          fontSize={2}
          gap={1}
          name="Bobby Bill Bob"
          size={64}
          src="/vercel.svg"
        />
        <Avatar
          alt="hello"
          background="var(--accent-1)"
          fontSize={4}
          gap={2}
          name="Bobby Bill Bob"
          size={128}
          src="/vercel.svg"
        />
        <Avatar alt="" size={240} src="/vercel.svg" />
      </Grid>
    </Container>
  );
};

export default Home;
