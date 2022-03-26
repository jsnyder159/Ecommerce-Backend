// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// T*ODO Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// T*ODO Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// T*ODO Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: ProductTag,
  }
});
// T*ODO Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
