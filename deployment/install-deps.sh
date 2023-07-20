#!/bin/bash
if [ "$DEPLOYMENT_GROUP_NAME" == "Personal-Corner-FE-Staging" ]
then
  sudo rm -rf /var/www/Personal-Corner/staging-client
  sudo mv /var/www/Personal-Corner/temp-client /var/www/Personal-Corner/staging-client
  cd /var/www/Personal-Corner/staging-client
elif [ "$DEPLOYMENT_GROUP_NAME" == "Personal-Corner-FE" ]
then
  sudo rm -rf /var/www/Personal-Corner/prod-client
  sudo mv /var/www/Personal-Corner/temp-client /var/www/Personal-Corner/prod-client
  cd /var/www/Personal-Corner/prod-client

  
else
    echo "$DEPLOYMENT_GROUP_NAME is not valid"
    exit 1
fi