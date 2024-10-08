import { Module } from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { MenuItemsController } from './menu-items.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MenuItemsService, PrismaService],
  controllers: [MenuItemsController],
})
export class MenuItemsModule {}
