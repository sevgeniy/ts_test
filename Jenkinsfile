pipeline {
  agent {
    node {
      label 'worker_node1'
    }

  }
  stages {
    stage('Source') {
      agent any
      steps {
        git 'https://github.com/sevgeniy/ts_test'
      }
    }

  }
  environment {
    COMPLETED_MSG = 'Build done!'
  }
}