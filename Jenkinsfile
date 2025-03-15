pipeline {
    agent any 
    options {
        skipDefaultCheckout(true)
    }
    stages{

        stage ('clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage ('Checkout using SCM') {
            steps {
                checkout scm 
            }
        }


        stage('Build') {
            agent {
                docker{
                    image 'node:20.19.0-alpine'
                    args '-u root'
                    reuseNode true  //reuse the node for the next stages
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

        
        stage('Test') {
            agent {
                docker{
                    image 'node:20.19.0-alpine'
                    args '-u root'
                    reuseNode true  //reuse the node for the next stages
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