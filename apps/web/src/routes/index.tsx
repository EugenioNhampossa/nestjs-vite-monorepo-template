import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@mantine/core';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button>Click-me</Button>
    </div>
  );
}
