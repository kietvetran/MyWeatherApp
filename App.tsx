import { QueryClientProvider } from '@tanstack/react-query';
import Navigation from 'js/navigation/Navigation';
import { queryClient } from 'js/query/queryClient';

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Navigation />
        </QueryClientProvider>
    );
}
