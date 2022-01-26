import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';

export async function setupSwagger(app: INestApplication): Promise<void> {
  const options = new DocumentBuilder()
    .setTitle('IT Haja Test API Docs')
    .setVersion('1.0')
    .addBearerAuth()
    // .addServer('https://api.example.com', '운영 서버')
    // .addServer('https://test-api.example.com', '테스트 서버')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  const redocOptions: RedocOptions = {
    title: 'IT Haja Test API Docs',
    hideDownloadButton: true,
    tagGroups: [
      {
        name: 'IT HAJA Todo List',
        tags: ['Todo'],
      },
    ],
  };

  await RedocModule.setup('docs', app, document, redocOptions);
}
