#!/bin/bash

API_URL="https://github.com/pbujanowski/human-resources-api.git"
API_DEST="human-resources-api"

API_DB_URL="https://github.com/pbujanowski/human-resources-api-db"
API_DB_DEST="human-resources-api-db"

CLIENT_URL="https://github.com/pbujanowski/human-resources-client.git"
CLIENT_DEST="human-resources-client"

fetch_repository () {
    if [[ -d $2 ]]
    then
        (cd "$2" && git pull "$1")
    else
        git clone "$1" "$2"
    fi
}

fetch_repository $API_URL $API_DEST
fetch_repository $API_DB_URL $API_DB_DEST
fetch_repository $CLIENT_URL $CLIENT_DEST
