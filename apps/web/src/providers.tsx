import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { shadcnCssVariableResolver } from '@/styles/cssVariablesResolver';
import { shadcnTheme } from './styles/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider cssVariablesResolver={shadcnCssVariableResolver} theme={shadcnTheme}>
        <ModalsProvider>
          <Notifications />
          <DatesProvider settings={{ locale: 'pt' }}>{children}</DatesProvider>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
