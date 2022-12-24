terraform {
  cloud {
    organization = "team-blackcat"

    workspaces {
      name = "e-com-blackcat"
    }
  }
}

provider "google" {
    project = "ceri-m1-ecommerce-2022"
    region  = "europe-west1"

}

data "google_secret_manager_secret" "address" {
  secret_id = "mysql/address"
}

resource "google_cloud_run_service" "front" {
  name     = "cloud-run-frontend"
  location = "europe-west1"
  max_instances = 1


  template {
    spec {
      containers {
        image = "europe-west1-docker.pkg.dev/ceri-m1-ecommerce-2022/blackcat/frontend-app:v1.1.0"
      }
    }
  }
}