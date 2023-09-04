const { PrismaClient } = require('@prisma/client');
import dataList from '../data.js';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.game.deleteMany();
    console.log('Deleted records in game table');
    await prisma.game.createMany({
      data: dataList,
    });
    console.log('Added game data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
