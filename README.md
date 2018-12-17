# Bamazon

Welcome to Bamazon! An online retailer totally not associated with any large conglomerates! 

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon.png "title")

This is a project which utilizes Node.js, MySQL and heavy use of Inquirer for user interaction. A user may purchase items from a list which is stored on a MySql database. The user will either be informed if the item is in stock (quantity > 0) and complete the transaction, or be met with a message explaining that item is out of stock. After the user comes back to the store, the quantity amounts will be remembered. Let us begin!

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon01.png "1")

Running node and the JS file will show this simple inquirer prompt.

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon02.png "2")

Saying yes will show the contents of the store as displayed on the MySQL database, and displayed with the CLI table package.

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon03.png "3")

After some prompts asking what product ID the user would like and how many, we are brought to the check out screen which lists the product, department, price, quantity and total. This is done through a MySql query. 

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon04.png "4")

A complete transaction and another satisfied customer. The user is then brought back to the original prompt. Here we see the quantity from the previous transaction is remembered, and Soylent Green has 10 less in stock.

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon05.png "5")

What if we cleaned out the store of a certain product? Here we buy out a product (my favorite) with a lower quantity for the low, low price of 2599.98.

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazon06.png "6")

After completing the transaction, we see trying to purchase it again will yield a message saying they are all out. A Shame. 

==============

The screenshots below show what happens when the boolean prompts for each section is "no".

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazonNo01.png "a")

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazonNo02.png "b")

![](https://raw.github.com/FyperTheViper/Bamazon/master/images/bamazonNo03.png "c")

I hope you enjoyed BAMAZON! Look at this github for future projects!
======



