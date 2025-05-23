pipeline {
  agent any
  environment {
    SONAR_TOKEN = credentials('sonar-token')
  }

stage('Cloner') {
  steps {
    git branch: 'main', url: 'https://github.com/Soxnang/frontend-angular-app.git'
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
