# sh curl-scripts/index.sh
API="http://localhost:4741"
URL_PATH="/recipes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "title": "'"${TITLE}"'",
        "ingredients": "'"${INGREDIENTS}"'",
          "steps": "'"${STEPS}"'",
            "time": "'"${TIME}"'",
             "owner": "'"${OWNER}"'"
    }
  }'

echo
