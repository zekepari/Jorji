FROM python:3.11

WORKDIR /robloranker

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . /robloranker

CMD ["python", "./main.py"]