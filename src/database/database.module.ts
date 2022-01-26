import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import * as mongooseDelete from 'mongoose-delete';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: 'main',
      useFactory: () => {
        if (process.env.NODE_ENV === 'development') mongoose.set('debug', true);

        mongoose.plugin(mongooseDelete);
        mongoose.plugin(mongoosePaginate);

        return {
          uri: process.env.MONGO_URI,
          maxPoolSize: 5,
          autoIndex: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
