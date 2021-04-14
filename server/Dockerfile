FROM python:3.9
WORKDIR /app/server

COPY server/requirements.txt .
RUN pip install -r requirements.txt

COPY server/django_project django_project
COPY server/manage.py server/entrypoint.sh ./

CMD ./entrypoint.sh
