const { PrismaClient } = require('@prisma/client');
import { Game } from '@prisma/client';
import dataKo from '../data_ko.js';
import dataEn from '../data_en.js';
import imageList from '../img_data.js';

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.game.deleteMany();
    await prisma.gameKo.deleteMany();
    await prisma.gameEn.deleteMany();
    console.log('Deleted records in game table');

    await dataKo.map(async (n: any) => {
      await prisma.game.create({ data: { id: n.id } });
    });
    await prisma.gameKo.createMany({ data: dataKo });
    await prisma.gameEn.createMany({ data: dataEn });
    console.log('Added game data');

    await prisma.image.deleteMany();
    console.log('Deleted records in image table');

    await prisma.image.createMany({
      data: imageList,
    });
    console.log('Added image data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
