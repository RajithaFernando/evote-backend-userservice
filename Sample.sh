# Download kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# Veryfy kubectl
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"

echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check

# Install Kubectl
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl


#  Check Kubectl installed succesfully
kubectl version --client


# Install Docker
sudo amazon-linux-extras install docker

# Start Docker
sudo service docker start

# Enable Docker at system startup
sudo systemctl enable docker 

# Add ec2-user to docker group
sudo usermod -a -G docker ec2-user




# Download Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

# Install Minikube
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Change Ownership of minikube to ec2-user
sudo chown ec2-user /usr/local/bin/minikube

# exit and come again to make effect

# Start Minikube
minikube start --vm-driver=docker





# Jenkins
# https://dev.to/aws-builders/jenkins-installation-configuration-on-aws-ec2-linux-instance-3npl
# https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos

# Check Java is installed in server
java -version

# If not avilable Install java
sudo yum install java-1.8.0-openjdk


# download the latest Jenkins package
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo

# To enable the installation of the package, import the key file from Jenkins-CI
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key


# Install Jenkins on the EC2 instance
sudo yum install jenkins


# Start jenkins
sudo service jenkins start

# Adding jenkins user to docker group and restarting jenkins  to take effect
sudo usermod -a -G docker jenkins

# Restart jenkins
sudo service jenkins restart




# THIS WORKED
https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos