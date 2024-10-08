import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  @Get()
  get() {
    return this.menuItemsService.getAllMenuItems();
  }

  @Post()
  create(@Body() { name, parentId }: { name: string; parentId?: number }) {
    return this.menuItemsService.create(name, parentId);
  }

  @Delete(':id')
  delete(@Param() { id }: { id: number }) {
    return this.menuItemsService.delete(+id);
  }
}
