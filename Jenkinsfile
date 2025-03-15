pipeline {
    agent any 
    options {
        skipDefaultCheckout(true)
    }
    stages {

        stage('clean_workspace') {
            steps {
                cleanWs()
            }
        }

        stage('checkout_using_scm') {
            steps {
                checkout scm 
            }
        }

        stage('build') {
            agent {
                docker {
                    image 'node:20.19.0-alpine'
                    reuseNode true  // Reuse the node for the next stages
                }
            }

            steps {
                sh '''
                    ls -l
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -l
                '''
            }
        }

        stage('test') {
            agent {
                docker {
                    image 'node:20.19.0-alpine'
                    reuseNode true  // Reuse the node for the next stages
                }
            }

            steps {
                sh '''                  
                    npm run test
                '''
            }
        }
    }
}