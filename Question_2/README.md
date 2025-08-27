i used react navigation with a stack navigator to move between screens. The stack navigator works like a stack of pages where the user can go move to another screen and then come back using the back button.

I then made two screens for the app:

HomeScreen where  shows a list of products from the FakeStore API.

DetailScreen that opens when the user taps on a product, and it shows more information such as the product’s image, price and description.

The navigation flow is simple: the app starts on the Home screen then when a product is pressed it navigates to the Detail screen and passes the product’s ID. From there the user can go back to the Home screen.