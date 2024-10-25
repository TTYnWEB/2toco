#!/usr/bin/env bash

DATE_EXPIRE="$(date +'%Y-%m-%d')"
sqlite3 urls.db "DELETE FROM urls WHERE date_expire = '"${DATE_EXPIRE}"';"
