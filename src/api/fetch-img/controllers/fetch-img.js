'use strict';

/**
 * A set of functions called "actions" for `fetch-img`
 */

module.exports = {
  fetchImg: async (ctx, next) => {
    try {
      const data = await strapi.service("api::fetch-img.fetch-img").fetchImg(ctx.params.name); 
      ctx.body = data;

    } catch (err) {
      ctx.body = err;
    }
  }
};
