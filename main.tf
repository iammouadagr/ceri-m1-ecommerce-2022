terraform {
  cloud {
    organization = "team-blackcat"

    workspaces {
      name = "e-com-blackcat"
    }
  }
}

variable "GOOGLE_APPLICATION_CREDENTIALS" {
  type = string
  sensitive = true
  description = "Google Cloud service account credentials"
}

provider "google" {
    project = "ceri-m1-ecommerce-2022"
    region  = "europe-west1"
    credentials = var.GOOGLE_APPLICATION_CREDENTIALS

}

data "google_secret_manager_secret" "host" {
  secret_id = "mysql-address"
}

data "google_secret_manager_secret" "user" {
  secret_id = "mysql-user-blackcat"
}

data "google_secret_manager_secret" "database" {
  secret_id = "mysql-database-blackcat"
}

data "google_secret_manager_secret" "password" {
  secret_id = "mysql-password-blackcat"
}

resource "google_cloud_run_service_iam_member" "invokers_backend" {
  location = google_cloud_run_service.backend.location
  service  = google_cloud_run_service.backend.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

resource "google_cloud_run_service" "backend" {
  name     = "blackcat-backend"
  location = "europe-west1"


  template {
    spec {
      service_account_name = "terraform-blackcat@ceri-m1-ecommerce-2022.iam.gserviceaccount.com"
      containers {
        image = "europe-west1-docker.pkg.dev/ceri-m1-ecommerce-2022/blackcat/backend-app:1.2.0"
        env {
          name = "DB_HOST"
          value_from {
            secret_key_ref{
              name = data.google_secret_manager_secret.host.secret_id
              key = "latest"
            }
          }
        }
        env {
          name = "DB_USER"
          value = "blackcat"
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

resource "google_clud_run_service" "frontend"{
  name = "blackcat-frontend"
  location = "europe-west1"

  template{
    spec{
      service_account_name = "terraform-blackcat@ceri-m1-ecommerce-2022.iam.gserviceaccount.com"
      containers {
        image = "europe-west1-docker.pkg.dev/ceri-m1-ecommerce-2022/blackcat/frontend-app:1.2.0"
        env {
          name = "API_URL"
          value = google_cloud_run_service.backend.status[0].url
        }
      }
    }
  }
}


output "api_url" {
  value = google_cloud_run_service.backend.status[0].url
}

output "client_url" {
  value = google_cloud_run_service.frontend.status[0].url
}

