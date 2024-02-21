const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const items = [
  {
    id: 1,
    title: 'Notebook',
    description:
      'This elegant 100-page notebook features premium, lined paper thats perfect for jotting down thoughts, notes, or sketches. Its durable cover and compact size make it an ideal companion for both students and professionals looking to capture ideas on the go.',
    shortDescription: 'Elegant 100-page lined notebook.',
    price: '3',
  },
  {
    id: 2,
    title: 'Pen',
    description:
      'Experience smooth writing with our high-quality blue ink ballpoint pen. Designed for comfort and precision, it features an ergonomic grip and a sleek, durable design. Perfect for everyday use, this pen ensures your writing is always clear and stylish.',
    shortDescription: 'High-quality blue ink ballpoint pen.',
    price: '1',
  },
  {
    id: 3,
    title: 'Coffee Mug',
    description:
      'Enjoy your morning coffee in our stylish ceramic mug. Holding up to 12 oz of your favorite beverage, this mug features a comfortable handle and a sturdy, microwave-safe design. Its elegant finish and durability make it a great addition to your kitchen or office.',
    shortDescription: 'Stylish 12 oz ceramic coffee mug.',
    price: '5',
  },
];

app.get('/shop-items', (req, res) => {
  setTimeout(() => {
    res.send(items);
  }, 1000);
});

PORT = 9200;
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running,  and App is listening on port ' + PORT,
    );
  else console.log("Error occurred, server can't start", error);
});
