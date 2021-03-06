
exports.up = function(knex, Promise) {
  return addColumnsToProducts(knex, Promise);
};

exports.down = function(knex, Promise) {
  return dropColumnsToProducts(knex, Promise);
};

function addColumnsToProducts(knex, Promise) {
  return knex.schema.table('products', (table) => {
    table.string('brandName');
    table.string('categoryPath');
    table.string('customerRating');
    table.string('customerRatingImage');
    table.bigInteger('itemId').unique().notNullable();
    table.integer('numReviews');
    table.text('productUrl');
    table.decimal('salePrice');
    table.text('shortDescription');
    table.string('thumbnailImage');
    table.decimal('msrp');
  });
}

function dropColumnsToProducts(knex, Promise) {
  return knex.schema.table('products', (table) => {
    table.dropColumns([
      'categoryPath',
      'customerRating',
      'customerRatingImage',
      'itemId',
      'numReviews',
      'productUrl',
      'salePrice',
      'shortDescription',
      'thumbnailImage',
      'msrp',
      'brandName'
    ])
  });
}
