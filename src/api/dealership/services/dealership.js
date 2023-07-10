'use strict';

/**
 * dealership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dealership.dealership');
