import jwt from "jsonwebtoken";

export function getUserIdFromToken(token: string): string | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return (decoded as { userId: string }).userId;
  } catch {
    return null;
  }
}
