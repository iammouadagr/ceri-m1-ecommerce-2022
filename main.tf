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
