INSERT INTO urls
  (url, date_create, date_expire)
VALUES
  (?, DATE('now'), DATE('now', '+1 day'));
