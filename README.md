# real-estate-microservice

Microservice to manage data from a real estate listings application.

Uses HTTP requests to the server: https://wesleytheobald.com with the given endpoints below.

## Requesting Data

1. Request all listing entries:
- Method: GET
- Endpoint: /api/real-estate
- Request Content: None
- Response Content: JSON
- Example URL: https://wesleytheobald.com/api/real-estate


2. Requesting specific listing entry:
- Method: GET
- Endpoint: /api/real-estate/:id
- Request Content: Listing ID (as path in URL)
- Response Content: JSON
- Example URL: https://wesleytheobald.com/api/real-estate/3ko5090kda53 (made up listing ID)


3. Adding new listing
- Method: POST
- Endpoint: /api/real-estate
- Reqeust Content: JSON with listing data (Schema below)
- Response Content: Status, 200-success, 442-invalid data
- Example URL: https://wesleytheobald.com/api/real-estate


4. Delete specific listing:
- Method: DELETE
- Endpoint: /api/real-estate/:id
- Request Content: Listing ID (as path in URL)
- Response Content: 200-success, 442-invalid ID
- Example URL: https://wesleytheobald.com/api/real-estate/3ko5090kda53 (made up listing ID)


5. Replace specific listing:
- Method: PATCH
- Endpoint: /api/real-estate/:id
- Request Content: Listing ID (as path in URL)
- Response Content: 200-success, 442-invalid ID
- Example URL: https://wesleytheobald.com/api/real-estate/3ko5090kda53 (made up listing ID)


## Create/Replace Listing Schema
1. address: String,
2. city: String,
3. postalCode: String,
4. price: Number,
5. propertyType: String,
6. description: String,
7. rentalStatus: String,
8. bedrooms: String,
9. bathrooms: String,
10. livingRooms: String,
11. kitchens: String,
12. facilities: String,
13. rentalStyle: String,
14. privateAccess: String,
15. tenantPreferences: String,
16. date: Date,
17. name: String,
18. email: String,
19. phone: String,
20. weChart: String,
