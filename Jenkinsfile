pipeline {
    agent any
    stages {
        stage('Check') {
            steps {
                sh ```
                    pwd
                    node --version
                ```
            }
        }
    }
}