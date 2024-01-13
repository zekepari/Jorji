FROM python:3.11

WORKDIR /jorji

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . /jorji

CMD ["python", "./main.py"]