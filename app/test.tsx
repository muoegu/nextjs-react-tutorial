import Link from 'next/link';
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component={Link} href="/gym">
      gym
    </Button>
  );
}

export default Demo;