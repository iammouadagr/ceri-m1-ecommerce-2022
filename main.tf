terraform {
  cloud {
    organization = "team-blackcat"

    workspaces {
      name = "e-com-blackcat"
    }
  }
}

variable "TF_VAR_GOOGLE_APPLICATION_CREDENTIALS" {
  type = string
  sensitive = true
  description = "Google Cloud service account credentials"
}

provider "google" {
    project = "ceri-m1-ecommerce-2022"
    region  = "europe-west1"
    credentials = var.TF_VAR_GOOGLE_APPLICATION_CREDENTIALS

}

data "google_secret_manager_secret" "host" {
  secret_id = "mysql-address"
}

data "google_secret_manager_secret" "user" {
  secret_id = "mysql-user-blackcat"
}

data "google_secret_manager_secret" "password" {
  secret_id = "mysql-password-blackcat"
}

data "google_secret_manager_secret" "database" {
  secret_id = "mysql-database-blackcat"
}


resource "google_cloud_run_service" "backend" {
  name     = "cloud-run-backend"
  location = "europe-west1"


  template {
    spec {
      containers {
        image = "europe-west1-docker.pkg.dev/ceri-m1-ecommerce-2022/blackcat/backend-app:1.2.0"
        env {
          name = "DB_HOST"
          value_from {
            secret_key_ref{
              name = "mysql-address"
              key = "latest"
            }
          }
        }
        env {
          name = "DB_USER"
          value_from {
            secret_key_ref{
              name = "mysql-user-blackcat"
              key = "latest"
            }
          }
        }
        env {
          name = "DB_PASSWORD"
          value_from {
            secret_key_ref{
              name = "mysql-password-blackcat"
              key = "latest"
            }
          }
        }
        env {
          name = "DB_NAME"
          value_from {
            secret_key_ref{
              name = "mysql-database-blackcat"
              key = "latest"
            }
          }
        }
      }
    }
  }


  traffic {
    percent         = 100
    latest_revision = true
  }


}

