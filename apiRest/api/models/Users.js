const keys = require('../keys');
const redis = require('redis');


const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

module.exports.exists = (userEmail) => {
    return new Promise((resolve, reject) => {
        redisClient.exists(userEmail, function (error, exist) {
            if (error) {
                reject(0);
            }
            else {
                resolve(exist);
            }
        });
    });
};

module.exports.setUser = (userEmail, password, salt) => {
    return new Promise((resolve, reject) => {
        resolve(redisClient.hset(userEmail, 'password', password, 'salt', salt));
    });
};

module.exports.getUser = (userEmail) => {
    return new Promise((resolve, reject) => {
        redisClient.hgetall(userEmail, function (error, exist) {
            if (error) {
                reject(0);
            }
            else {
                resolve(exist);
            }
        });
    });
};
