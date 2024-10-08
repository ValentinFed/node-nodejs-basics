import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
    const filePath = path.join(path.resolve(), 'src', 'fs', 'files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young', 'utf8');
        } else {
            throw error;
        }
    }
};

await create();