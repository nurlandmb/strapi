'use strict';

/**
 * fetch-img service
 */

module.exports = {
  fetchImg: async(name) => {
    // strapi.api.
    const entries = await strapi.entityService.findMany("plugin::upload.files")
    return entries;
  }
}
