import { prisma } from "@/lib/prisma";

// Serves the image stored in PostImage for one recipe: /api/recipes/<postId>/image
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const img = await prisma.postImage.findFirst({
    where: { postId: id },
    select: { imageData: true, imageType: true },
  });
  if (!img) return new Response("Not found", { status: 404 });

  return new Response(new Uint8Array(img.imageData), {
    headers: {
      "Content-Type": img.imageType,
      "Content-Length": String(img.imageData.length),
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}