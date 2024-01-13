FROM python:3.11

WORKDIR /Jorji

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . /Jorji

CMD ["python", "./main.py"]