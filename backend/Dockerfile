FROM python:3.10
RUN mkdir -p /srv/goodmood
WORKDIR /srv/goodmood


RUN apt-get update && apt-get install -y \
        libpcre3 libpcre3-dev \
        gcc gdal-bin \
        libpq-dev \
        fish

RUN python3 -m pip install --upgrade pip
COPY Pipfile Pipfile.lock /srv/goodmood/
RUN pip install pipenv && pipenv install --system

EXPOSE 8095

ENTRYPOINT ["sh","entrypoint.sh"]