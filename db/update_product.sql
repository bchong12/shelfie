UPDATE products
SET name=${name}, price=${price}, image_url=${imageUrl}
WHERE product_id=${id};

SELECT * FROM products;