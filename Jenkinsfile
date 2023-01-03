pipeline {
    agent any
    environment {
	    GITHUB_USERNAME_TOKEN=credentials('GITHUB_USERNAME_TOKEN')
    }
    
    stages {
        stage('Cloning our Git') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/RajithaFernando/evote-backend-userservice']])
                sh 'whoami'
                
            }
            
        }
        
        stage('Build Docker Image') {
            steps {
                 script {
                     sh 'docker build . --file Dockerfile --tag rajithafernando/evote-backend-userservice'
                 }
                
            }
            
        }
        
        stage('Dockerhub push image') {
            steps {
                 script {
                    withCredentials([string(credentialsId: 'DOCKERHUB_PASSWORD', variable: 'DOCKERHUB_PASSWORD')]) {
                        sh 'docker login -u rajithafernando -p ${DOCKERHUB_PASSWORD}'
                        
                        sh 'docker push rajithafernando/evote-backend-userservice'
                    }
                     
                 }
                
            }
            
        }
    }
}