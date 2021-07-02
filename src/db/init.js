const database = require('./config');

const initDb = {
  async init() {
    const db = await Database();

    await db.exec();
  },
};

initDb.init();
