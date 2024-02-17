import { createServer } from '@/server';
import { PORT } from '@/config';

const port = PORT ? Number(PORT) : 3000;

const server = createServer();

server.listen(port, () => {
    try {
        console.log(`Server Listening on port ${port}`);
    } catch (error) {
        console.error(`Error ${error.message}`);
    }
});
