import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

@Injectable()
export class MenuItemsService {
  constructor(private prisma: PrismaService) {}

  async getAllMenuItems(): Promise<any> {
    return this.prisma.menuItem.findMany({
      include: {
        children: true,
      },
    });
  }

  async create(name: string, parentId?: number) {
    return this.prisma.menuItem.create({
      data: {
        name,
        parentId,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.menuItem.delete({
      where: {
        id,
      },
    });
  }
}
