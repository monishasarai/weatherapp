#Exp-1
1.abstract
2.functional requirements
3.non functional requirements
4.user identification
5.workflow of users
6.use cases

#Exp-2

#Exp-3

#Exp-4

#Exp-5

#Exp-6

#Exp-7
Multimodule maven

#Exp-8
Jenkins 
Java and Maven
**/*.war
https://localhost:6060/manager/text
deploy
deploy123

#Exp-9

**PIPELINE CODE**
H/2 * * * *
pipeline {
    agent any
    tools{
        maven 'MAVEN_HOME'
    }
    stages {
        stage('git repo & clean') {
            steps {
                //bat "rmdir  /s /q mavenjava"
                bat "git clone https://github.com/srivijju/jenkins_web.git"
                bat "mvn clean -f jenkins_web"
            }
        }
        stage('install') {
            steps {
                bat "mvn install -f jenkins_web"
            }
        }
        stage('test') {
            steps {
                bat "mvn test -f jenkins_web"
            }
        }
        stage('package') {
            steps {
                bat "mvn package -f jenkins_web"
            }
        }
    }
}


#Exp-10

**MINIKUBE**

minikube start --driver=docker

minikube kubectl -- get pods -A

kubectl version --client

minikube start

kubectl create deployment mynginx --image=nginx

kubectl get deployments

kubectl expose deployment mynginx --type=NodePort --port=80 --target-port=80

kubectl scale deployment mynginx --replicas=4

kubectl get service mynginx

kubectl port-forward svc/mynginx 8081:80

Open localhost after that delete

kubectl delete deployment mynginx
kubectl delete service mynginx

minikube stop

minikube delete

**NAGIOS**

docker pull jasonrivers/nagios:latest

docker run --name nagiosdemo -p 8888:80 jasonrivers/nagios:latest

#Exp-11
ngrok authtoken
ngrok http 8080

webhook in git link/github-webhook/
application/json

go to jenkins 
java_build = trigger webhook

email notif
google activity
SMTP server-465 port 
smtp.gmail.com

gmail/password
SSL 

java_build
editable notif= project_recipient = recipent,email

advanced settings lo
add triggers lo always

#Exp-12

**AWS**
commands:

sudo su
sudo apt-get update
sudo apt-get install docker.io
sudo docker --version
sudo docker images
sudo docker ps
git clone //your repo
cd repo Name
nano Dockerfile
after that send ctrl + o && ctrl + x
sudo docker build -t fileName .
sudo docker run -d -p 9090:8080 filename //port give the value of the port you gave


//SAFE SIDE (Docker compose file):

FROM tomcat:9.0

RUN rm -rf /usr/local/tomcat/webapps/*

COPY target/*.war /usr/local/tomcat/webapps/ROOT.war

CMD ["catalina.sh", "run"]
