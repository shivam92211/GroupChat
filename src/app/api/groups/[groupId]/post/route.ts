import express, { Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app: Application = express();

app.use(express.json());

// POST API to create a post
app.post('/posts', (req: Request, res: Response) => {
  const createPost = async (): Promise<Response> => {
    try {
      const { content, authorId, groupId } = req.body;

      if (!content || !authorId || !groupId) {
        return res.status(400).json({ message: 'Content, authorId, and groupId are required.' });
      }

      // Check if author exists
      const author = await prisma.user.findUnique({ where: { id: authorId } });
      if (!author) {
        return res.status(404).json({ message: 'Author not found' });
      }

      // Check if group exists
      const group = await prisma.group.findUnique({ where: { id: groupId } });
      if (!group) {
        return res.status(404).json({ message: 'Group not found' });
      }

      // Create the post
      const post = await prisma.post.create({
        data: {
          content,
          authorId,
          groupId,
        },
      });

      return res.status(201).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
  };

  createPost();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});