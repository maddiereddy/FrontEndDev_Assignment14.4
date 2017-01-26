# FrontEndDev_Assignment14.4
### Assignment 14.4 of the AcadGild Front End Web Dev Course

● Create a service with  
{  
    "productCode":”2323”,  
    "productName":”Nikon”,  
    "productLine":”Nikon with body and Lens”,  
    "buyPrice":”30000”  
}  
data format and make a post call for adding new object into and put for editing object.  

● Add error handling method in every service.

<u>Notes:
1. I've used angular-cli for this project and so it will run with command:
`ng serve` on localhost:4200
2. I have used `https://angular.io/docs/ts/latest/tutorial/toh-pt6.html` as reference
3. * Service for making http calls is in product.service
   * Rather than require a real API server, communication with the remote server  
    is achieved by adding the InMemoryWebApiModule to the module
   * Page navigation is done using angular routing
   * Products are displayed in the product component.  
    One can add a new button by clicking on Add New button  
    A product can be edited by clicking on the product name  
    Changes made are saved by update button  
    A product can be deleted on the edit page 
    