import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

export function setupViewEngine(app: NestExpressApplication): void {
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  app.setViewEngine('ejs');
}
