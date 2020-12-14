# start with  a base image containing java runtime
FROM openjdk:8-jdk-alpine


#Add maintainer info
LABEL maintainer="github stud team Natnael"

#add a volume pointing to /tmp
VOLUME /tmp

# Make  PORT 9010 AVAILABLE TO THE OUTSIDE WORLD 
EXPOSE 9005

# application jar 
ARG JAR_FILE=target/spring-boot-security-jwt-0.0.1-SNAPSHOT.jar

# add this jar to the container
ADD ${JAR_FILE} AuthService.jar

#Run the jar file
ENTRYPOINT [ "java","-Djava.security.egd=file:/dev/./urandom","-jar","/AuthService.jar" ]