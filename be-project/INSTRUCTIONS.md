** ENDPOINTS **

RESOURCE	        HTTP METHOD	    ROUTE	                                DESCRIPTION
User	                POST	    /users	                                Create a user (and optionally associate with **)
User	                GET	        /users/{userId}	                        Get a user // have to build: basket, setting
User	                PUT	        /users/{userId}	                        Update a user
User	                DELETE	    /users/{userId}	                        Delete a user
User	                GET	        /users	                                Get users

OrderedProduct  	    GET	        /users/{userId}/products	            Get a user's ordered products
OrderedProduct      	POST	    /users/{userId}/products	            Enroll a user to a course (as student or teacher)
OrderedProduct      	DELETE	    /users/{userId}/products/{productId}	Delete a user's enrollment to a course

Product	                POST	    /products	                            Create a Product
Product	                GET	        /products	                            Get products
Product	                GET	        /products/{productId}	                Get a Product
Product	                PUT	        /products/{productId}	                Update a Product
Product	                DELETE	    /products/{productId}	                Delete a Product

Category                GET	        /categories	                            Get categories
Category                GET	        /categories/{categoryId}	            Get a Category

** DIAGRAM EXPLANATION **
The diagram has the following relations:

one-to-many (also known as 1-n):
Category <> Products

many-to-many (also known as m-n):
User <> Product (via the OrderedProduct (JOIN table) relation table with two foreign keys: userId and productId).