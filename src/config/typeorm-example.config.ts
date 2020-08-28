import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '', // host name: localhost or a server name
  port: 5432, // default port number
  username: '', // postgres by default
  password: '', // postgres password
  database: '', // name of db being used
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // not recommended in production mode
};
