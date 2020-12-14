Note:
- for all the services create the schema/db
- when creating/adding new stock, price and review, make sure product service is running to verify productID

Product Service
db : productDB
port : 9010
get product by catagory: http://localhost:9010/api/v1/product/category/{category}
docker build: docker build -t productrestapi .
docker run: docker run -p 5000:9010 productrestapi
end point (running on docker): http://localhost:5000/api/v1/product
end point (running locally): http://localhost:9010/api/v1/product

Stock Service
db : stockDB
port : 9020
docker build: docker build -t stockrestapi .
docker run: docker run -p 6020:9020 stockrestapi
end point (running on docker): http://localhost:6020/api/v1/stock
end point (running locally): http://localhost:9020/api/v1/stock

Price Service
db: priceDB
port : 9030
docker build: docker build -t pricerestapi .
docker run: docker run -p 6030:9030 pricerestapi
end point (running on docker) : http://localhost:6030/api/v1/price
end point (running locally) : http://localhost:9030/api/v1/price

Review Service
db : reviewDB
port: 9040
docker build: docker build -t reviewrestapi.
docker run: docker run -p 6040:9040 reviewrestapi
end point (running on docker) : http://localhost:6040/api/v1/review
end point (running locally) : http://localhost:9040/api/v1/review

auth security service
db : authDB
port:9005
docker build: docker build -t authrestapi.
docker run -p 6005: 9005 authservice
end point (running on docker) : http://localhost:6005/api/v1/review
end point (running locally) : http://localhost:9005/api/v1/review