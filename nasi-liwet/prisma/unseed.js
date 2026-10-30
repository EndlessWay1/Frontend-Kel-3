// Script untuk menghapus semua data resep dari database (tanpa menghapus akun user)
const { PrismaClient } = require("../lib/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  console.log("Mulai membersihkan data resep dari database...");

  // Hapus semua data relasi resep
  await prisma.ingredientsItems.deleteMany({});
  await prisma.ingredients.deleteMany({});
  await prisma.instruction.deleteMany({});
  await prisma.tags.deleteMany({});
  await prisma.postImage.deleteMany({});
  
  // Hapus semua post resep
  const deletedPosts = await prisma.post.deleteMany({});

  console.log(`Berhasil menghapus ${deletedPosts.count} resep dari database.`);
  console.log("Database resep sudah bersih (unseeded)!");
}

main()
  .catch((e) => {
    console.error("Gagal unseed database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
