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
  name     = "cloud-run-frontend"
  location = "europe-west1"


  template {
    spec {
      containers {
        image = "europe-west1-docker.pkg.dev/ceri-m1-ecommerce-2022/blackcat/backend-app:v1.1.0"
        env {
          name = "DB_HOST"
          value_from {
            secret_key_ref{
              name = data.google_secret_manager_secret.a.host
              key = "latest"
            }
          }
        }
        env {
          name = "DB_USER"
          value_from {
            secret_key_ref{
              name = data.google_secret_manager_secret.user.secret_id
              key = "latest"
            }
          }
        }
        env {
          name = "DB_PASSWORD"
          value_from {
            secret_key_ref{
              name = data.google_secret_manager_secret.password.secret_id
              key = "latest"
            }
          }
        }
        env {
          name = "DB_NAME"
          value_from {
            secret_key_ref{
              name = data.google_secret_manager_secret.database.secret_id
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

