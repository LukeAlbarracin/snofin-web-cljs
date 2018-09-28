FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/snowcobra.jar /snowcobra/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/snowcobra/app.jar"]
