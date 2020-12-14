# start with  a base image containing java runtime
FROM openjdk:8-jdk-alpine


#Add maintainer info
LABEL maintainer="github stud team Natnael"

#add a volume pointing to /tmp
VOLUME /tmp

# Make  PORT 9010 AVAILABLE TO THE OUTSIDE WORLD 
EXPOSE 9020

# application jar 
ARG JAR_FILE=target/StockRestApi-0.0.1-SNAPSHOT.jar

# add this jar to the container
ADD ${JAR_FILE} StockRestAPI.jar

#Run the jar file
ENTRYPOINT [ "java","-Djava.security.egd=file:/dev/./urandom","-jar","/StockRestAPI.jar" ]