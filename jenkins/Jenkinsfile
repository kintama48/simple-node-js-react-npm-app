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
                snykTokenId: 'ec386f51-ef76-4bcb-81a6-e841d161cf02',
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
