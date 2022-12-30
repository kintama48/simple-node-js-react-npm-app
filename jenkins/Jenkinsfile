pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                snykSecurity(
                snykInstallation: 'COMP421snyk',
                snykTokenId: '980c61d0-add9-42a5-8344-01f9b97a9e0f',
                // place other optional parameters here, for example:
                additionalArguments: '--all-projects --detection-depth=<DEPTH>'
                )
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
