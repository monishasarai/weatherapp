#Exp-1
1.abstract
2.functional requirements
3.non functional requirements
4.user identification
5.workflow of users
6.use cases

#Exp-2
git --version                               # Check Git version
git config --global user.name "Your Name"   # Set username
git config --global user.email "email"      # Set email
git config --list                           # View all Git configs
git init                                     # Initialize a repository
git clone https://github.com/user/repo.git   # Clone a repository
git remote -v                                # View remote URLs
git remote add origin https://github.com/user/repo.git   # Add remote origin
git push <remote> <branch>                   # Push to remote branch
git push origin main                         # Push to main branch
git pull <remote> <branch>                   # Pull updates
git pull origin main                         # Pull from main
git remote remove origin                     # Remove remote origin
git remote rename origin upstream            # Rename remote
git fetch origin                             # Fetch changes without merge
git remote set-url origin https://github.com/user/new.git # Change remote URL
git remote show origin                       # Show remote details
git status                                    # View file status
git add filename.txt                          # Add single file
git add .                                     # Add all files
git commit -m "Message"                       # Commit changes
git branch                                    # List branches
git branch -a                                 # List all (local + remote) branches
git branch branch-name                        # Create branch
git branch -d branch-name                     # Delete branch
git branch -D branch-name                     # Force delete branch
git branch -r                                 # List remote branches
git checkout branch-name                      # Switch to branch
git checkout -b new-branch                    # Create + switch to branch
git remote prune origin                       # Clean deleted remote branches
git fetch origin feature-branch               # Fetch specific branch
git push --set-upstream origin feature-branch # Set upstream branch
git checkout main                             # Switch to main
git merge branch-name                         # Merge a branch
git rebase origin/main                        # Rebase onto remote main
git reset <file>                              # Unstage a file
git reset --hard                              # Reset everything to last commit
git revert <commit>                           # Undo commit by creating new one
git log                                       # View commit history
git log --oneline                             # Short history
git diff                                      # Show unstaged changes
git show <commit>                             # Show details of a commit
git restore filename                          # Undo changes in file (before staging)
git commit --amend -m "Correct message"       # Fix last commit message
git reflog                                    # View all actions (recover lost commits)
git checkout -b feature-ui <hash>             # Restore deleted branch from hash
git fetch origin                              # Download latest changes only
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch secrets.txt" --prune-empty --tag-name-filter cat -- --all    # Remove sensitive file from history
git checkout previous-branch                  # Switch to target branch
git merge another-branch                      # Merge other branch into it
git add app.js                                # Stage after fixing merge conflict
git commit                                    # Commit merge resolution
touch .gitignore                              # Create .gitignore file
git blame script.py                           # See who edited each line
git stash                                     # Save changes temporarily
git switch another-branch                     # Switch branch
git switch main                               # Switch back
git stash apply                               # Restore stashed changes
git branch --merged                           # List merged branches
git branch -d branch1 branch2 branch3         # Delete multiple branches

#Exp-3
✅ A. Facilitating Collaborative Work by Creating an Organization
(No Git commands are used here — GitHub UI steps only.)
✔ Therefore → No Git commands for Question A
✅ B. Collaborating on a Shared Repository (Collaborator-1 & Collaborator-2)
B1. Commands for Collaborator-2 (joining shared repository)
1. Set Up Git
git config --global user.name "Your Name"                # Set username
git config --global user.email "you@example.com"         # Set email
git remote -v                                            # Check if any remote exists
2. Clone the Shared Repository
git clone https://github.com/username/repository.git     # Clone shared repo
cd repository                                             # Move into repo
3. Create a Branch
git checkout -b feature/your-feature                     # Create + switch to feature branch
4. Add & Commit Changes
git add .                                                # Stage changes
git commit -m "Meaningful message"                       # Commit changes
5. Push Branch to GitHub
git push origin feature/your-feature                     # Push feature branch
6. Keep Branch Updated with Latest Main
git checkout main                                         # Switch to main
git pull origin main                                      # Get latest main updates
git checkout feature/your-feature                         # Switch back to branch
git merge main                                            # Merge latest changes
✅ C. Fork Workflow (Person-2 contributing to Person-1 public repo)
1. Clone Forked Repository
git clone https://github.com/your-username/awesome-project   # Clone forked repo
cd awesome-project
2. Make Changes & Commit
git add .                                                    # Stage all changes
git commit -m "Update the project"                           # Commit
3. Push Changes
git push origin main                                         # Push to your fork
4. (UI) Create a Pull Request
(No Git command — GitHub button only)
✅ D. Keeping Fork Updated with Original Repository
Add Original Repo as Upstream
git remote add upstream https://github.com/Person1/awesome-project   # Add upstream
Fetch Latest Changes
git fetch upstream                                                   # Fetch original repo changes
Merge into Your Main
git checkout main                                                    # Switch to your main
git merge upstream/main                                              # Merge updated code
Push Updated Main Back to Your Fork
git push origin main                                                 # Sync your fork
✅ E. Resolving Merge Conflicts
1. Check Conflicted Files
git status                                                           # Shows conflict files
2. After fixing markers manually → mark conflict resolved
git add <filename>                                                   # Mark resolved
3. Complete Merge
git commit                                                           # Finish merge
If Rebase Conflict:
git rebase --continue                                               # Continue rebase
To Abort Merge
git merge --abort                                                    # Stop merge
✅ F. Patch Creation & Applying Patch
1. Create Patch from Last Commit
git format-patch -1 <commit-hash>                                   # Create patch file
2. Create Patch for Last 3 Commits
git format-patch -3                                                  # Create 3 patches
3. Create Patch for Range
git format-patch <base-commit>..HEAD                                 # Patch from base→HEAD
4. Apply Patch (Owner Side)
git apply my-changes.patch                                           # Apply normal patch
git am 0001-Your-commit-message.patch                                # Apply email-style patch
✅ G. Extra Commands Used in Collaboration
Check Remote Connections
git remote -v
Create Branch
git checkout -b new-branch
Push Branch First Time
git push --set-upstream origin new-branch
Delete Local Branch
git branch -d branch-name
Delete Remote Branch
git push origin --delete branch-name

#Exp-4
Create maven java and web project

#Exp-5
CLI commands
docker --version
mkdir exams
cd exams
docker pull ubuntu
docker run -it -p 9090:80 --name myubuntu12 ubuntu:latest
apt update
ls
cd usr
ls
cd share
ls
mkdir nginx
cd nginx
mkdir html
cd html
apt install nano
nano index.html 
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to nginx!</title>
    <style>
        body {
            width: 35em;
            margin: 0 auto;
            font-family: Tahoma, Verdana, Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Welcome user, I'm Monisha Sarai!</h1>
    <p>You are seeing this page because nginx is successfully installed and running.</p>

    <p>For documentation, visit 
        <a href="http://nginx.org/">nginx.org</a>.<br>
        Commercial support available at 
        <a href="http://nginx.com/">nginx.com</a>.
    </p>

    <p><em>Thank you for using nginx.</em></p>
</body>
</html>
apt install nginx -y
service nginx start
docker stop myubuntu12
docker rm myubuntu12
docker ps -a
//extra
docker pull redis
docker run --name my-redis -d redis
docker ps
docker exec -it myr-redis redis-cli
SET name "abcd"
GET name
docker stop my-redis
docker ps -a
docker start my-redis
docker stop my-redis
docker rm my-redis
docker rmi redis
mkdir ~/DockerProjects/Redis
cd ~/DockerProjects/Redis
FROM redis:latest
CMD ["redis-server"]
docker build -t redisnew .
docker run --name myredisnew -d redisnew
docker stop myredisnew
docker login
docker commit id idlecanvas79/redis1
docker push idlecanvas79/redis1
docker rm id
docker rmi idlecanvas79/redis1
docker logout
docker pull idlecanvas79/redis1
docker run --name myredis -d idlecanvas79/redis1
docker exec -it myredis redis-cli
SET name ""
GET name
exit
dockr stop myredis
docker rm id
docker rmi idlecanvas79/redis1

#Exp-6
# Simple Flask App by Monisha Sarai
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello Monisha Sarai!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
FROM python:3.10-slim
WORKDIR /app
COPY app.py /app/
RUN pip install flask
CMD ["python", "app.py"]
# Monisha Sarai – Docker Compose for Flask + MySQL
version: "3.9"

services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - db

  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
    ports:
      - "3306:3306"


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
