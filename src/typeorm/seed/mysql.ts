import * as mysql from 'mysql2';
import { DataSource } from 'typeorm';
import { getDefaultOptions } from '..';

export const cleanDb = async () => {
  const rawConnection = mysql.createConnection({
    host: process.env.TYPEORM_HOST,
    user: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
  });

  const dbName = process.env.TYPEORM_DATABASE;

  await rawConnection.promise().query(`DROP DATABASE IF EXISTS \`${dbName}\`;`);
  await rawConnection
    .promise()
    .query(
      `CREATE DATABASE \`${dbName}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`,
    );

  rawConnection.destroy();
};

export const initDbForSeeding = async (
  isCleaning?: boolean,
): Promise<DataSource> => {
  // DB 클리닝
  if (isCleaning) {
    await cleanDb();
  }

  // DB 인스턴스 생성
  const instance = new DataSource({ ...getDefaultOptions() });
  await instance.initialize();

  return instance;
};
