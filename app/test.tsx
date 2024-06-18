import Link from 'next/link';
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component={Link} href="/gym">
        Gym Calculater
    </Button>
  );
}

export default Demo;