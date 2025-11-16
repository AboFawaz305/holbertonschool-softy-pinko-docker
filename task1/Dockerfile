FROM ubuntu:latest
WORKDIR /app
RUN <<EOF \
apt-get update; \
apt-get upgrade -y; \
apt-get install -y python3 python3-pip; \
rm /usr/lib/python*/EXTERNALLY-MANAGED; \
pip3 install flask
EOF
COPY api.py ./
CMD flask --app api run --port 5252 --host 0.0.0.0
