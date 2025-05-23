pipeline {
  agent any
  environment {
    SONAR_TOKEN = credentials('sonar-token')
  }

  stages {
    stage('Cloner') {
      steps {
        git 'https://github.com/ngone/frontend-angular-app.git'
      }
    }
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build --configuration production'
      }
    }
    stage('SonarQube') {
      steps {
        withSonarQubeEnv('SonarQubeServer') {
          sh 'npx sonar-scanner'
        }
      }
    }
    stage('Build Image') {
      steps {
        sh 'docker build -t frontend-angular .'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker-compose up -d frontend'
      }
    }
  }
}
